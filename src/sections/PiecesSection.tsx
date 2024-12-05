import { ReactNode } from "react";
import { PieceSectionProps } from "../types/Props";
import { Piece } from "../types/Types";
import { Divider } from "@mui/material";

const PiecesSection = (props: PieceSectionProps): ReactNode => {
  const { pieces } = props;
  
  return (
    <div>
      <h2 className="text-xl font-bold">PIECES</h2>
      <Divider sx={{ width: '100%', height: '2px', backgroundColor: '#E9E6E4', marginBottom: '8px' }} />
      {pieces.map((piece: Piece, index: number) => (
        <div key={index}>
          <div className="flex justify-end">{`토스트 조각 작성 일자 ${piece.createdAt}`}</div>
          <div className="flex flex-row items-center justify-between p-4 w-full h-28">
            <div className="flex flex-row items-center space-x-4">
              {piece.image && (
                <div className="w-20 h-20 overflow-hidden">
                  <img src={piece.image} alt="icon" className="w-full h-full object-contain" />
                </div>
              )}
              <div className="flex flex-col">
                <h2 className="text-lg font-bold">{piece.title}</h2>
                <p className="text-gray-500">{piece.nickname}</p>
              </div>
            </div>
          </div>
        </div>  
      ))}
    </div>
  );
};

export default PiecesSection;
