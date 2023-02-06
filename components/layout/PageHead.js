import Head from "next/head";
function PageHead({ headTitle }) {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Launchpad Web App"}
                </title>
                <link rel="icon" href="/launchpad-template/favicon.png" />
            </Head>
        </>
    );
}
export default PageHead;
