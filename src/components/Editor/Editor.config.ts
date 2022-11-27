import {
  TurnIntoHeading,
  TurnIntoText,
  WrapInBulletList,
  WrapInOrderedList
} from "@milkdown/preset-commonmark";
import { EditorView } from "@milkdown/prose/view";
import { setBlockType } from "@milkdown/prose/commands";
import { defaultConfig } from "@milkdown/plugin-menu";

const hasMark = (state: any, type: any) => {
  if (!type) return false;
  const { from, $from, to, empty } = state.selection;
  if (empty) {
    return !!type.isInSet(state.storedMarks || $from.marks());
  }
  return state.doc.rangeHasMark(from, to, type);
};

export const menuConfig = [
  [
    {
      type: 'button',
      icon: 'my-custom',
      key: 'Undo'
    }
  ],
  [
    {
      type: "select",
      text: "Nagłówki",
      options: [
        // { id: 1, text: "H1 - Heading 1" },
        { id: 2, text: "H2 - Heading 2" },
        { id: 3, text: "H3 - Heading 3" },
        { id: 4, text: "H4 - Heading 4" },
        { id: 0, text: "P - paragraph" }
      ],
      disabled: (view: any) => {
        const { state } = view;
        const setToHeading = (level: any) =>
          setBlockType(state.schema.nodes.heading, { level })(state);
        return !(setToHeading(1) || setToHeading(2) || setToHeading(3));
      },
      onSelect: (id: any) => {
        return id > 0 ? [TurnIntoHeading, id] : [TurnIntoText, null];
      }
    }
  ],
  [
    {
      type: "button",
      icon: "bold",
      key: "ToggleBold",
      active: (view: any) => hasMark(view.state, view.state.schema.marks.strong),
      disabled: (view: any) => !view.state.schema.marks.strong
    },
    {
      type: "button",
      icon: "italic",
      key: "ToggleItalic",
      active: (view: any) => hasMark(view.state, view.state.schema.marks.em),
      disabled: (view: any) => !view.state.schema.marks.em
    },
    {
      type: "button",
      icon: "strikeThrough",
      key: "ToggleStrikeThrough",
      active: (view: any) =>
        hasMark(view.state, view.state.schema.marks.strike_through),
      disabled: (view: any) => !view.state.schema.marks.strike_through
    }
  ],
  [
    {
      type: "button",
      icon: "bulletList",
      key: WrapInBulletList
    },
    {
      type: "button",
      icon: "orderedList",
      key: WrapInOrderedList
    }
  ],
  [
    {
      type: "button",
      icon: "link",
      key: "ToggleLink",
      active: (view: any) => hasMark(view.state, view.state.schema.marks.link)
    },
    {
      type: 'button',
      icon: 'image',
      key: 'InsertImage',
    },
    {
      type: 'button',
      icon: 'quote',
      key: 'WrapInBlockquote',
    },
  ],
  [
    {
      type: 'button',
      icon: 'table',
      key: 'InsertTable',
    },
  ],
  //domyślna konfiguracja
  // ...defaultConfig
];