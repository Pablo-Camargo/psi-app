interface Button {
  onClick: () => void;
  titleButton: string;
}

export default function Button(props: Button) {
  return (
    <div>
      {' '}
      <button
        className="pt-3.5 pb-3.5 pl-7 pr-7 bg-sky-500 rounded text-white hover:bg-sky-600"
        onClick={() => props.onClick()}
      >
        {props.titleButton}
      </button>
    </div>
  );
}
