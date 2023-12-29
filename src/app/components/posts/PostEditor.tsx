import React, { FC, useCallback, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';

const PostEditor: FC = () => {
    const [value, setValue] = useState('');
    const quillRef = useRef<ReactQuill>(null);

    const imageHandler = useCallback(() => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = () => {
            const file = input.files![0];
            const reader = new FileReader();

            reader.onload = () => {
                const imageUrl = reader.result;
                const quill = quillRef.current?.getEditor();
                if (quill) {
                    const range = quill.getSelection(true);
                    quill.insertEmbed(range.index, 'image', imageUrl, 'user');
                }
            };

            reader.readAsDataURL(file);
        };
    }, []);

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ header: [1, 2, 3, 4, false] }],
                    ['bold', 'italic', 'underline', 'blockquote'],
                    [{ color: [] }],
                    [
                        { list: 'ordered' },
                        { list: 'bullet' },
                        { indent: '-1' },
                        { indent: '+1' },
                    ],
                    ['link', 'image'],
                    ['clean'],
                ],
                handlers: {
                    image: imageHandler,
                },
            },
            clipboard: {
                matchVisual: true,
            },
        }),
        [imageHandler],
    );

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'color',
        'clean',
    ];

    return (
        <ReactQuill
            value={value}
            formats={formats}
            modules={modules}
            onChange={setValue}
            ref={quillRef}
            theme='snow'
        />
    );
};

export default PostEditor;
