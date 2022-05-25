export interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;
}

export interface StyledButtonProps {
    $variant: ButtonVariant;
    $size: ButtonSize;
    $color: ButtonColor;
}

export enum ButtonVariant {
    solid = 'solid',
    outline = 'outline',
    ghost = 'ghost',
}

export enum ButtonColor {
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    danger = 'danger',
}

export enum ButtonSize {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
}
