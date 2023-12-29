"use client"

import { FC, useState } from "react";
import ReactQuill from 'react-quill';

const PostEditor: FC = () =>{
    const [value, setValue] = useState('');

    return (
        <>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
        </>
    )
}

export default PostEditor;