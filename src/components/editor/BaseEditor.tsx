/* eslint-disable no-useless-escape */
import { CKEditor } from '@ckeditor/ckeditor5-react'
import {
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  Base64UploadAdapter,
  BlockQuote,
  Bold,
  ClassicEditor,
  Code,
  CodeBlock,
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
  List,
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
  Underline,
  WordCount,
} from 'ckeditor5'
import 'ckeditor5/ckeditor5.css'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

export default function BaseEditor() {
  const { t } = useTranslation()

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
          placeholder: t('enter', { name: t('content'), defaultValue: 'Nhập nội dung' }),
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
            List,
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
        data='<p></p>'
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
