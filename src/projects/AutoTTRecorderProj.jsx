import React from 'react';

function AutoTTRecorderProj() {
  return (
    <div className="project-content">
      <h2 className="project-header">Auto-TT-Recorder</h2>
      <div className="project-description">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pDp-LCe_dbg" title="YouTube video player" style={{border: 0}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/luckytyphlosion/auto-tt-recorder">GitHub link</a></p>
        
        <p>Between 2021 and 2022, I created a command line tool called Auto-TT-Recorder to automatically record (as a video) single player races or “Time Trials” of Mario Kart Wii using the game’s built-in replay feature. Python was used for the main program logic, a Wii emulator named <a target="_blank" rel="noopener noreferrer" href="https://dolphin-emu.org/">Dolphin</a> was used to run the Mario Kart Wii ISO, and FFmpeg was used to encode the resulting video.</p>
        <p>The program has seen use on channels that upload Mario Kart Wii time trials, such as <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCxCPLtXIg43HRP6QZN8gyYQ">CTGP Records</a>, <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/200ccCTGPRecords">200cc CTGP Records</a>, and <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/CTGPKartRecords">CTGP Kart Records</a>.</p>
        <p>Various features were added into the program, such as:</p>
        <ul>
          <li>The ability to record ghosts from the <a target="_blank" rel="noopener noreferrer" href="https://chadsoft.co.uk/time-trials/">CTGP Revolution Ghost Database</a>, by supplying a link to the ghost from the Ghost Database website</li>
          <li>Automatic track downloading from <a target="_blank" rel="noopener noreferrer" href="https://ct.wiimm.de/">Wiimm’s custom track archive</a></li>
          <li>Simple editing options, such as the ability to show an in-game top 10 screen before the replay</li>
          <li>The ability to add custom music to the video</li>
          <li>The ability to add an input display overlay to the video showing the currently pressed controller inputs</li>
          <li>Video specific encoding options to control the video resolution, video and audio codecs used, and video and audio quality</li>
        </ul>
      </div>
    </div>
  );
}

export default AutoTTRecorderProj;
