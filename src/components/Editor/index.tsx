import React, { useEffect, useState } from "react";
import { EditorInfo, ReactEditor, useEditor } from "@milkdown/react";
// Components
import { Box } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { createEditor } from "./createEditor";
import { getHTML } from '@milkdown/utils';


const useStyles = makeStyles({
  root: {
    "& .milkdown .editor": {
      backgroundColor: '#1f1f1f',
      minHeight: '600px',
      padding: '16px 24px'
    },
    "& .milkdown-menu": {
      backgroundColor: '#1f1f1f',
      '& button': {
        backgroundColor: '#1f1f1f',
      }
    },
    "& .milkdown .editor p": {
      margin: "8px 0"
    },
  }
  // root: {
  //   "& .menu-selector-wrapper": {
  //     position: "relative",
  //   },
  //   "& .milkdown-menu": {
  //     overflowX: "visible",
  //     overflowY: "visible"
  //   },
  //   "& .milkdown .editor": {
  //     // overflow: 'scroll',
  //     padding: "1px 10px 30px",
  //     minHeight: '200px'
  //   },
  //   "& .milkdown .editor p": {
  //     margin: "10px 0"
  //   },
  //   "& .milkdown .editor .heading": {
  //     margin: "0 0 20px"
  //   }
  // }
});

const Milkdown = ({ onChange, value, setHTML, editable, spellcheck }: {[key: string]: any}): JSX.Element => {
  const classes = useStyles();
  const [contentHTML, setContentHTML] = useState<string | undefined>();

  // useEffect(() => {
  //   setHTML(editor.getInstance()?.action(getHTML()));
  // }, [value]);
  //
  // useEffect(() => {
  //   console.log(contentHTML);
  // }, [contentHTML]);

  useEffect(() => {
    try {
      setContentHTML(editor.getInstance()?.action(getHTML()));
      setHTML(editor.getInstance()?.action(getHTML()));
    }
    catch (err) {
      console.log(err);
    }
  }, [value]);

  useEffect(() => {
    console.log(contentHTML);
  }, [contentHTML]);

  const editor = useEditor((root) => {
    return createEditor({
      root,
      onChange,
      value,
      editable,
      spellcheck
    });
  });

  console.log(editor.getDom());
  console.log(editor.getInstance()?.action(getHTML()));
  console.log(editor);

  return (
    <Box className= { classes.root } >
      {/*  nie wiem czy ta konwersja zadziała */}
      <ReactEditor editor={editor as unknown as EditorInfo } /> 
    </Box>
  );
}

export default Milkdown;
