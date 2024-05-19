export const Button = ({
    name,
    className
}: Props) => {
    return (
        <button className={className}>
            {name}
        </button>
    );
}

interface Props {
    name: string;
    className: string;
}