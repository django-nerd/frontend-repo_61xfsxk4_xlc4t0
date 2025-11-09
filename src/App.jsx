import React from 'react';
import HeroCover from './components/HeroCover';
import AtmosphereFX from './components/AtmosphereFX';
import Scene from './components/Scene';
import FinalTribute from './components/FinalTribute';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black font-[Playfair_Display]">
      <AtmosphereFX />
      <HeroCover />

      {/* Scene 1 — The Mountain of Whispers */}
      <Scene
        subtitle="The Mountain of Whispers"
        title="The world below sleeps. But the mountains above… they breathe."
        lines={[
          { text: 'Through clouds heavy with sorrow and moonlight, her castle looms — veiled in fog, crowned in silence.' },
          { text: 'They say demons guard her gates. They say no man has ever returned.' },
          { text: 'And yet here I am — a dark knight climbing through storm and shadow, chasing the most beautiful sin the night ever made.' },
          { text: 'Her name is Douae.', highlight: true },
          { text: 'The vampire who reigns where the sun dares not rise. The reason I forgot what peace feels like.' }
        ]}
      />

      {/* Scene 2 — The Blood Moon Calls */}
      <Scene
        subtitle="The Blood Moon Calls"
        title="I fought through endless nights — steel against claws, fire against flame."
        lines={[
          { text: 'Every battle carved her name deeper into me.' },
          { text: 'Her eyes haunted every kill, her voice echoed between every thunderclap.' },
          { text: 'They say knights fight for kingdoms. But I fight for her — the creature the night itself kneels before.' }
        ]}
        accentLine="If beauty is a curse, then let me be the one who bleeds for it."
      />

      {/* Scene 3 — The Gates of Eternity */}
      <Scene
        subtitle="The Gates of Eternity"
        title="The doors open not with sound — but with surrender."
        lines={[
          { text: 'She stands there. Moonlight caught in her hair. Eyes like twin eclipses — beautiful and merciless.' },
          { text: '“Still chasing death, knight?” she whispers. “No,” I breathe. “Chasing you.”' },
          { text: 'Her smile — both dagger and dream. Her presence — a storm wrapped in silk.' },
          { text: 'Every scar on me hums her name.' }
        ]}
      />

      {/* Scene 4 — The Kiss Between Shadows */}
      <Scene
        subtitle="The Kiss Between Shadows"
        title="She touches my face — cold fire, gentle ruin."
        lines={[
          { text: 'And I realize every battle was just a path to this moment.' },
          { text: 'The rain stops. The world kneels.' },
          { text: '“You would die for me?” she asks. I look into her eyes — endless, ancient, eternal.' },
          { text: '“No,” I say. “I already did.”', highlight: true },
          { text: 'Her lips brush mine — and the night breaks open. For the first time in centuries, even the darkness blushes.' }
        ]}
      />

      {/* Scene 5 — The Night That Became Ours */}
      <Scene
        subtitle="The Night That Became Ours"
        title="Now, every thunderstorm carries her laughter."
        lines={[
          { text: 'Every cloud over the mountain remembers her scent.' },
          { text: 'The demons bow. The wind hums our story.' },
          { text: 'I am no hero. She is no monster. We are what the night always wanted — a heartbeat and its echo, bound in eternity.' }
        ]}
      />

      {/* Scene 6 — The Knight’s Memory */}
      <Scene
        subtitle="The Knight’s Memory"
        title="Long after the battles ended, I still carry one thing."
        lines={[
          { text: 'A small, folded picture, worn by rain and war.' },
          { text: 'The edges are cracked. The colors faded. But her smile... her smile never lost its light.' },
          { text: 'They say knights carry crests and vows. I carried her face.' },
          { text: 'Through every fight, every wound, every dawn I didn’t want to see — this was the proof that beauty can conquer even darkness.' },
        ]}
        accentLine="All that remains after a thousand fights... is her."
      />

      <FinalTribute />

      <footer className="py-10 text-center text-[#f4f4f4]/60 bg-black">
        <p className="tracking-wide">— The Dark Knight</p>
      </footer>
    </div>
  );
};

export default App;
