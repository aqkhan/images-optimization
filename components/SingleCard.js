import Image from "next/image";

const SingleCard = ( { imgURL } ) => {
    return(
        <>
            {/* Card 1 */}
            <div className="mx-2 w-72 lg:mb-0 mb-8 border mt-8">
                <div>
                    <Image src={ imgURL } className="w-full h-44" width={288} height={176} />
                </div>
                <div className="bg-white">
                    <div className="flex items-center justify-between px-4 pt-4">
                        <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                            <p className="text-xs text-yellow-500">Featured</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center">
                            <h2 className="text-lg font-semibold">iphone XS</h2>
                            <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                    </div>
                </div>
            </div>
            {/* Card 1 Ends */}
        </>
    )
}

export default SingleCard;