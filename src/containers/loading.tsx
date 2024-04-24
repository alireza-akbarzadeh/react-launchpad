export function Loading() {
  return (
    <>
      <div id="bounce" className="loading_container">
        <div id="upper" className="flex">
          <div className="loading_Circle" />
          <div className="loading_Circle" />
          <div className="loading_Circle" />
        </div>
        <div id="downer" className="flex">
          <div className="loading_Circle" />
          <div className="loading_Circle" />
          <div className="loading_Circle" />
        </div>
      </div>
      <div id="bounce" className="loading_container cyan" />
      <div id="bounce" className="loading_container darkblue" />
      <div id="bounce" className="loading_container cyan" />
    </>
  );
}
