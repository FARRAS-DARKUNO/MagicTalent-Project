
const CardWithDetailInformation = () => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

            <img
                className="rounded-t-lg w-full h-48 object-cover"
                src="https://interogasi.com/publik/files/09-2018/jasa-pembuatan-website.jpg"
                alt="Blog Cover"
            />

            <div className="p-5 h-64 flex flex-col justify-between items-center text-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                    Noteworthy technology acquisitions 2021 sakmsak skamksa
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <button type="button" className="gradient-button">
                    Read Detail
                </button>
            </div>
        </div>
    );
}

export default CardWithDetailInformation;
