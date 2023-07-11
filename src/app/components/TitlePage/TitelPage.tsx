
interface TielPage {
  title: string;
}
export default async function TitelPage(props: TielPage) {
  return (
    <div className=" m-8 flex gap-80 justify-between items-center ">
      <h1 className="font-bold text-3xl">{props.title}</h1>
    </div>
  );
}
