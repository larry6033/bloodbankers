function Main() {
  return (
    <div>
      {" "}
      <div className="flex flex-col justify-center">
        <h1 className="flex justify-center my-[2em] text-[3em] text-[red]">
          Our Journey of saving lives
        </h1>
        <div className="flex justify-evenly">
          <div className="flex flex-col  items-center">
            <h2 className="text-[1.5em] text-[blue]">registered donors</h2>
            <h3 className="text-[2em]">2,000</h3>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[1.5em] text-[blue]">Touched lives</h2>
            <h3 className="text-[2em]">1500</h3>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[1.5em] text-[blue]">Hospitals surpported</h2>
            <h3 className="text-[2em]">20</h3>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[1.5em] text-[blue]">Counties</h2>
            <h3 className="text-[2em]">16</h3>
          </div>
        </div>
      </div>
      <div>
        <h1 className="flex justify-center my-[2em] text-[3em] text-[red]">Who we are</h1>
        <div className="flex justify-evenly ">
          {" "}
          <div className="p-[3em] flex flex-col items-center w-[20%] shadow-lg ">
            <h2 className="text-[1.5em] text-[red] mb-[1em]">Our mission</h2>
            <p>
              To provide quality, reliable and useful technology services in
              blood and related healthcare services management for improved
              outcomes, through management information systems that support
              streamlining of workflows and real-time information sharing.
            </p>
          </div>
          <div className="p-[5em] flex flex-col items-center w-[20%] shadow-lg ">
            <h2 className="text-[1.5em] text-[red] mb-[1.5em]">Our vision</h2>
            <p>
              To provide a cleaner way of recording data about the donors
              details and the hospital to reduce the workload involving
              paperwork and storage of the records.
            </p>
          </div>
        </div>
        <div className="flex justify-center my-[2em]">
        <button className='bg-blue-500  px-[3em] py-[1em] rounded-[10px] text-[blue]'>Read More</button>
        </div>
      </div> 
    </div>
  );
}
export default Main;
