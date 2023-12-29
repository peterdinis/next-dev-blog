import { FC } from "react";
import { EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const extensions = [
    StarterKit,
  ]
  
  const content = '<p>Hello World!</p>'

const PostEditor: FC = () =>{
    return (
        <EditorProvider extensions={extensions} content={content}>
        <FloatingMenu>This is the floating menu</FloatingMenu>
        <BubbleMenu>This is the bubble menu</BubbleMenu>
      </EditorProvider>
    )
}

export default PostEditor;