"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "engga ?",
      "serius byby ?",
      "kalo aku minta nya halus2 boleh ?",
      "byby yang cantik imut lucu",
      "aku beliin mixue deh nanti",
      "kalo tas red panda lucu mau ?",
      "PLEASE SAYANG",
      "byby :(",
      "aku gk bisa hidup tanpa byby",
      "seluruh napas aku ada di byby",
      "nooo akuu meningsoyy",
      "please sayang ya mau yaa",
      ":((((",
      "ya ya yaa byby please",
      "Aishiteru byby",
      "tombol ini = tombol hijau hehe",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold"><p>YEEYYYY SAMA BYBY SELAMANYAAA I love you byby ku !! ;))</p><p> hadiah valentine nya menyusul ya sayang hehe</p></div>
        </>
      ) : (
        <>
          <img
            className="h-[400px]"
            src="https://media1.tenor.com/m/2jYifw6j8YYAAAAd/red-panda.gif"
          />
          <h1 className="my-4 text-4xl"><p>Byby di valentine tahun ini aku bersyukur karena ada byby sama aku</p> 
          <p>dan makin hari rasa sayang aku ke byby terus bertambah, I Love You Byby</p>
          <p><b>Byby punya aku selamanya ya ? sampe tua ya byby</b></p>
             </h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
