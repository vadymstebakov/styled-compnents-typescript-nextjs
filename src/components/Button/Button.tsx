import { FC, memo } from 'react';
import { ButtonProps, ButtonVariant, ButtonSize, ButtonColor } from './types';
import { StyledButton } from './style';

const Button: FC<ButtonProps> = ({
    children,
    onClick,
    variant = ButtonVariant.solid,
    size = ButtonSize.md,
    color = ButtonColor.primary,
}) => {
    return (
        <StyledButton onClick={onClick} $variant={variant} $size={size} $color={color}>
            <span>{children}</span>
        </StyledButton>
    );
};

export default memo(Button);
