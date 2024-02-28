/* eslint-disable no-useless-escape */
import { Alignment } from '@ckeditor/ckeditor5-alignment'
import { Autoformat } from '@ckeditor/ckeditor5-autoformat'
import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles'
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote'
import { CodeBlock } from '@ckeditor/ckeditor5-code-block'
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'
import { Essentials } from '@ckeditor/ckeditor5-essentials'
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace'
import { Font } from '@ckeditor/ckeditor5-font'
import { Heading } from '@ckeditor/ckeditor5-heading'
import { Highlight } from '@ckeditor/ckeditor5-highlight'
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line'
import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed'
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support'
import {
  AutoImage,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  PictureEditing,
} from '@ckeditor/ckeditor5-image'
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent'
import { AutoLink, Link } from '@ckeditor/ckeditor5-link'
import { DocumentList, DocumentListProperties, TodoDocumentList } from '@ckeditor/ckeditor5-list'
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed'
import { Mention } from '@ckeditor/ckeditor5-mention'
import { Paragraph } from '@ckeditor/ckeditor5-paragraph'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format'
import { ShowBlocks } from '@ckeditor/ckeditor5-show-blocks'
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing'
import { SpecialCharacters, SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters'
import {
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
} from '@ckeditor/ckeditor5-table'
import { TextTransformation } from '@ckeditor/ckeditor5-typing'
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload'
import { WordCount } from '@ckeditor/ckeditor5-word-count'
import { twMerge } from 'tailwind-merge'

export default function BaseEditor() {
  return (
    <div
      className={twMerge(
        `
          [&_.ck-source-editing-area>textarea:focus]:border-primary
          [&_.ck-source-editing-area>textarea]:rounded-b-md
          [&_.ck-source-editing-area>textarea]:dark:border-dark-424
          [&_.ck-source-editing-area>textarea]:dark:bg-dark-141
          [&_.ck-source-editing-area]:rounded-b-md
        `,
        `
          [&_.raw-html-embed]:dark:bg-dark-141
          [&_.raw-html-embed_textarea]:dark:bg-dark-141
        `,
        `
          [&_.ck.ck-content:focus]:border-primary
          [&_.ck.ck-content:focus]:dark:border-primary
          [&_.ck.ck-content:hover]:border-primary
          [&_.ck.ck-content:hover]:dark:border-primary
          [&_.ck.ck-content]:rounded-b-md
          [&_.ck.ck-content]:transition-all
          [&_.ck.ck-content]:dark:border-dark-424
          [&_.ck.ck-content]:dark:bg-dark-141
        `,
        `
          [&_.ck.ck-toolbar]:rounded-t-md
          [&_.ck.ck-toolbar]:dark:border-dark-424
          [&_.ck.ck-toolbar]:dark:bg-dark-141
        `,
        `
          [&_.ck.ck-toolbar_.ck.ck-button.ck-on]:dark:bg-transparent
          [&_.ck.ck-toolbar_.ck.ck-button.ck-on]:dark:text-primary
          [&_.ck.ck-toolbar_.ck.ck-button:focus]:dark:border-none
          [&_.ck.ck-toolbar_.ck.ck-button:focus]:dark:outline-none
          [&_.ck.ck-toolbar_.ck.ck-button:hover]:dark:bg-transparent
          [&_.ck.ck-toolbar_.ck.ck-button:not(.ck-disabled):hover]:dark:text-primary
          [&_.ck.ck-toolbar_.ck.ck-button]:dark:border-none
          [&_.ck.ck-toolbar_.ck.ck-button]:dark:text-white
          [&_.ck.ck-toolbar_.ck.ck-button]:dark:outline-none
          [&_.ck.ck-toolbar_.ck.ck-splitbutton]:dark:bg-transparent
          [&_.ck.ck-toolbar_.ck.ck-splitbutton_.ck.ck-button]:dark:bg-transparent
          ${String.raw`
            [&_.ck.ck-toolbar_.ck.ck-dropdown\_\_panel.ck-dropdown\_\_panel\_se]:dark:bg-dark-141
            [&_.ck.ck-toolbar_.ck.ck-dropdown\_\_panel]:dark:bg-dark-141
            [&_.ck.ck-toolbar_.ck.ck-dropdown\_\_panel_.ck.ck-button.ck-insert-table-dropdown-grid-box.ck-on]:dark:border-primary
            [&_.ck.ck-toolbar_.ck.ck-dropdown\_\_panel_.ck.ck-list\_\_item]:dark:bg-dark-141
          `}
        `,
        `
          [&_ol]:ml-4
          [&_ol_ol]:ml-4 
          [&_ol_ul]:ml-4 
          [&_ul]:ml-4 
          [&_ul_ol]:ml-4 
          [&_ul_ul]:ml-4 
        `,
      )}
    >
      <CKEditor
        editor={ClassicEditor}
        config={{
          placeholder: 'Type or paste your content here!',
          plugins: [
            Alignment,
            AutoImage,
            AutoLink,
            Autoformat,
            Base64UploadAdapter,
            BlockQuote,
            Bold,
            Code,
            CodeBlock,
            DocumentList,
            DocumentListProperties,
            Essentials,
            FindAndReplace,
            Font,
            GeneralHtmlSupport,
            Heading,
            Highlight,
            HorizontalLine,
            HtmlEmbed,
            Image,
            ImageCaption,
            ImageInsert,
            ImageResize,
            ImageStyle,
            ImageToolbar,
            ImageUpload,
            Indent,
            IndentBlock,
            Italic,
            Link,
            Link,
            MediaEmbed,
            Mention,
            Paragraph,
            PictureEditing,
            RemoveFormat,
            ShowBlocks,
            SourceEditing,
            SpecialCharacters,
            SpecialCharactersEssentials,
            Strikethrough,
            Subscript,
            Superscript,
            Table,
            TableCaption,
            TableCellProperties,
            TableColumnResize,
            TableProperties,
            TableToolbar,
            TextTransformation,
            TodoDocumentList,
            Underline,
            WordCount,
          ],
          toolbar: {
            items: [
              'undo',
              'redo',
              '|',
              'exportPdf',
              'exportWord',
              'importWord',
              '|',
              'showBlocks',
              'formatPainter',
              'findAndReplace',
              'selectAll',
              'wproofreader',
              '|',
              'heading',
              '|',
              'style',
              '|',
              'fontSize',
              'fontFamily',
              'fontColor',
              'fontBackgroundColor',
              '-',
              'bold',
              'italic',
              'underline',
              {
                label: 'Formatting',
                icon: 'text',
                items: ['strikethrough', 'subscript', 'superscript', 'code', 'horizontalLine', '|', 'removeFormat'],
              },
              'specialCharacters',
              'pageBreak',
              '|',
              '|',
              '|',
              '|',
              '|',
              'link',
              'insertImage',
              'ckbox',
              'insertTable',
              'tableOfContents',
              'insertTemplate',
              {
                label: 'Insert',
                icon: 'plus',
                items: ['highlight', 'blockQuote', 'mediaEmbed', 'codeBlock', 'htmlEmbed'],
              },
              '|',
              'alignment',
              '|',
              'bulletedList',
              'numberedList',
              'todoList',
              'outdent',
              'indent',
              '|',
              'sourceEditing',
            ],
            shouldNotGroupWhenFull: true,
          },
          htmlSupport: {
            allow: [
              {
                name: /^.*$/,
                styles: true,
                attributes: true,
                classes: true,
              },
            ],
          },
          fontFamily: {
            supportAllValues: true,
          },
          fontSize: {
            options: [10, 12, 14, 'default', 18, 20, 22],
            supportAllValues: true,
          },
          htmlEmbed: {
            showPreviews: true,
          },
          image: {
            resizeOptions: [
              {
                name: 'resizeImage:original',
                label: 'Original',
                value: null,
              },
              {
                name: 'resizeImage:25',
                label: '25%',
                value: '25',
              },
              {
                name: 'resizeImage:50',
                label: '50%',
                value: '50',
              },
              {
                name: 'resizeImage:75',
                label: '75%',
                value: '75',
              },
              {
                name: 'resizeImage:100',
                label: '100%',
                value: '100',
              },
            ],
            toolbar: [
              'imageTextAlternative',
              'toggleImageCaption',
              '|',
              'imageStyle:inline',
              'imageStyle:wrapText',
              'imageStyle:breakText',
              'imageStyle:side',
              '|',
              'resizeImage',
              '|',
              'ckboxImageEdit',
            ],
          },
          list: {
            properties: {
              styles: true,
              startIndex: true,
              reversed: true,
            },
          },
          mention: {
            feeds: [
              {
                marker: '@',
                feed: ['@apple', '@google', '@fpt'],
                minimumCharacters: 1,
              },
            ],
          },
          table: {
            contentToolbar: [
              'tableColumn',
              'tableRow',
              'mergeTableCells',
              'tableProperties',
              'tableCellProperties',
              'toggleTableCaption',
            ],
          },
        }}
        data='<p>Hello from CKEditor&nbsp;5!</p>'
        onReady={(editor) => {
          console.log('Editor is ready to use!', editor)
        }}
        onChange={(event) => {
          console.log(event)
        }}
      />
    </div>
  )
}
