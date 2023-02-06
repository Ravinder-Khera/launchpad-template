import LayoutFront from "../components/layout/LayoutFront";

const Farming = () => {

    const getRanHex = size => {
        let result = [];
        let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
      
        for (let n = 0; n < size; n++) {
          result.push(hexRef[Math.floor(Math.random() * 16)]);
        }
        return result.join('');
      }

    const data = [
        {
            id: 1,
            title: "Ava",
        },
        {
            id: 2,
            title: "Mark",
        },
        {
            id: 3,
            title: "Ethan",
        },
        {
            id: 4,
            title: "Olivia",
        },
        {
            id: 5,
            title: "Liam",
        },
        {
            id: 6,
            title: "Avy",
        },
    ];



    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Farming"}
                pageTitle={"Farming"}
                pageTitleSub={"Welcome Farming Page"}
                parent={"Home"}
                child={"Farming"}

            >
                <div className="farming section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="farming-table">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th># RANK</th>
                                                    <th>Name</th>
                                                    <th>Public Key</th>
                                                    <th>locked</th>
                                                    <th>Balance</th>
                                                </tr>
                                                {data.map((item, i) => (
                                                    <tr key={i}>
                                                        <td>{item.id}</td>
                                                        <td>{item.title}</td>
                                                        <td>{"0x"+getRanHex(6)+"..."+getRanHex(8)}</td>
                                                        <td>{Math.floor(50 + Math.random() *(300 - 50 + 1))} Days</td>
                                                        <td>${Math.floor(50 + Math.random() *(300 - 50 + 1))},{Math.floor(Math.random() *1000)}.{Math.floor(Math.random() *100)}</td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
};

export default Farming;