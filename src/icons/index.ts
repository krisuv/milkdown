import UndoIcon from '@mui/icons-material/Undo';

const createIcon = (icon: any): string => (
    `<svg width="24" height="24">
        <path d="${icon.type.render().props.children.props.d}" fill="white" />
    </svg>`
);

export default createIcon;