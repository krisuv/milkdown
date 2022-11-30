import {
  Ctx,
  defaultValueCtx,
  Editor,
  editorViewOptionsCtx,
  rootCtx,
  ThemeIcon
} from "@milkdown/core";
import { gfm } from "@milkdown/preset-gfm";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { nord } from "@milkdown/theme-nord";
import { emoji } from "@milkdown/plugin-emoji";
import { Config, menu, menuPlugin } from "@milkdown/plugin-menu";
import { menuConfig } from "./Editor.config";
import { EditorInfo } from "@milkdown/react";
import { upload } from '@milkdown/plugin-upload';
import { history } from '@milkdown/plugin-history';

export const createEditor = ({
  root,
  onChange,
  value,
  editable,
  spellcheck
}: {[key: string]: any}) => {
  return Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root);

      ctx.get(listenerCtx).markdownUpdated((_, markdown) => {
        onChange(markdown);
      });

      ctx.set(editorViewOptionsCtx, {
        editable: () => editable
      });

      // root?.setAttribute("spellcheck", JSON.stringify(spellcheck));
      root?.setAttribute("spellcheck", `${spellcheck}`);

      // domyślna wartość zawartości edytora
      ctx.set(defaultValueCtx, value);

    })
    .use(nord.override((_, manager) => {
      const originalGet = manager.getSlice(ThemeIcon);

      manager.set(ThemeIcon, (icon) => {
        if(icon === "my-custom"){
          const icon = document.createElement('div');
          icon.innerText = '💲';
          return {
            dom: icon,
            label: 'my icon'
          };
        }
        return originalGet(icon);
      });
    }))
    .use(gfm)
      .use(history)
    .use(listener)
    .use(emoji)
    .use(
      menu.configure(menuPlugin, {
        config: menuConfig as (Config | ((ctx: Ctx) => Config) | undefined)
      })
    )
    .use(upload);
};