import LayoutFront from "../components/layout/LayoutFront";

const IgoRanking = () => {

    const data = [
        {
            id: 1,
            title: "Galactic Quest"
        },
        {
            id: 2,
            title: "Eternal Adventure"
        },
        {
            id: 3,
            title: "Mystery Realm"
        },
        {
            id: 4,
            title: "Chrono Chronicles"
        },
        {
            id: 5,
            title: "Shadow Legacy"
        },
        {
            id: 6,
            title: "Crystal Kingdom"
        },
    ];



    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Ranking"}
                pageTitle={"Ranking"}
                pageTitleSub={"Welcome Ranking Page"}
                parent={"Home"}
                child={"Ranking"}
            >
                <div className="ranking section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="ranking-table">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th># RANK</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>CHG 24H</th>
                                                    <th>Market CAP</th>
                                                    <th>VOL 24h</th>
                                                    <th>IGO ROI</th>
                                                </tr>
                                                {data.map((item, i) => (
                                                    <tr key={i}>
                                                        <td>0{i+1}</td>
                                                        <td><img src={"/launchpad-template/images/items/cc"+i+".png"} alt="GAME " width={30} /> {item.title}</td>
                                                        <td>${Math.floor(Math.random() * 100)+"."+Math.floor(Math.random() * 100)}</td>
                                                        <td>{Math.floor(Math.random() * 10)+"."+Math.floor(Math.random() * 100)+"%"}</td>
                                                        <td>{"$"+Math.floor(Math.random() * 100)+"."+Math.floor(Math.random() * 100)}</td>
                                                        <td>{"$"+Math.floor(Math.random() * 10)+"."+Math.floor(Math.random() * 10)+"M"}</td>
                                                        <td>{Math.floor(Math.random() * 100)+".0"+Math.floor(Math.random() * 100)+"x"}</td>
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


export default IgoRanking;