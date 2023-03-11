interface Props {
  title: string;
  children: string | JSX.Element | JSX.Element[];
}

export const Card = ({ title, children }: Props) => {
  return (
    <div className='mx-auto my-6 max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};
