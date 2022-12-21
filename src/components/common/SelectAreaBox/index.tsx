import { AreaType } from '@/types/place';

interface SelectAreaBoxProps {
    handlePlaceArea: (placeInfo: AreaType) => void;
    areaInfos: AreaType[];
}

const SelectAreaBox = ({ handlePlaceArea, areaInfos }: SelectAreaBoxProps) =>
    areaInfos && (
        <section className="w-80 h-[30rem] absolute left-2/4 translate-x-[-50%] z-[999] bg-white overflow-y-auto">
            {areaInfos.map((placeInfo: AreaType) => (
                <button
                    type="button"
                    className="w-full p-4 cursor-pointer"
                    key={`placeInfoBox-${placeInfo.name}`}
                    onClick={() => handlePlaceArea(placeInfo)}
                >
                    {placeInfo.name}
                </button>
            ))}
        </section>
    );

export default SelectAreaBox;
