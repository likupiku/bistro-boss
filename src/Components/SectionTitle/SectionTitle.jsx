
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-3/12 mx-auto text-center">
            <p className="text-xl font-semibold text-orange-500 my-2">---{subHeading}---</p>
            <h1 className="text-3xl font-bold border-y-4 border-green-600 py-4 text-green-700">{heading}</h1>

        </div>
    );
};

export default SectionTitle;