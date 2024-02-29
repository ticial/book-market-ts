import Panel from "components/ui/Panel/Panel";

const ErrorPage = () => {
  return (
    <div className="centered">
      <Panel className="rounded-3xl w-fit p-5 gap-5 justify-center text-center h-40">
        <h2 className="text-center font-bold text-gray-700 text-3xl">
          Oops, something went wrong. 404 error
        </h2>
        <a href="/" className="font-medium text-red-800">
          Back to catalog?
        </a>
      </Panel>
    </div>
  );
};

export default ErrorPage;
