
interface TielPage {
  title: string;
}
export default async function TitelPage(props: TielPage) {
  return (
    <div className=" ">
      <h1 className="font-bold text-3xl">{props.title}</h1>
    </div>
  );
}
