import React, { useEffect, useState } from "react";
import { EditorInfo, ReactEditor, useEditor } from "@milkdown/react";
// Components
import { Box } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { createEditor } from "./createEditor";
import { getHTML } from '@milkdown/utils';


const useStyles = makeStyles({
  root: {
    "& .menu-selector-wrapper": {
      position: "relative"
    },
    "& .milkdown-menu": {
      overflowX: "visible",
      overflowY: "visible"
    },
    "& .milkdown .editor": {
      padding: "1px 10px 30px",
      minHeight: 200
    },
    "& .milkdown .editor p": {
      margin: "10px 0"
    },
    "& .milkdown .editor .heading": {
      margin: "0 0 20px"
    }
  }
});

const Milkdown = ({ onChange, value, editable, spellcheck }: {[key: string]: any}): JSX.Element => {
  const classes = useStyles();
  const [contentHTML, setHTML] = useState<string | undefined>();

  useEffect(() => {
    setHTML(editor.getInstance()?.action(getHTML()));
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

  // console.log(editor.getDom());
  // console.log(editor.getInstance()?.action(getHTML()));
  // console.log(editor);

  return (
    <Box className= { classes.root } >
      {/*  nie wiem czy ta konwersja zadziała */}
      <ReactEditor editor={editor as unknown as EditorInfo } /> 
    </Box>
  );
}

export default Milkdown;
