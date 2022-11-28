import React from 'react';

function AutoTTRecorderYTProj() {
  return (
    <div className="project-content">
      <h2 className="project-header">CTGP Legacy Records</h1>
      <div className="project-description">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_nM24kyCty0" title="YouTube video player" style={{border: 0}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/luckytyphlosion/auto-tt-recorder">GitHub link</a></p>
        
        <p>Using Auto-TT-Recorder, I created a program to automatically record and upload videos of Mario Kart Wii “Time Trials” to a YouTube channel called CTGP Legacy Records.</p>
        <p>Replays were selected automatically from the CTGP Revolution Ghost Database, from order of date set. The channel was also configured to look for records using the slower vehicle type (mostly Kart, but sometimes Bike in rare cases) and for records on the fan game mode 200cc. The channel also featured custom music played within runs, which users would submit in the Discord server for myself to review and add the information to the program.</p>
        <p>The <a href="https://developers.google.com/youtube/v3">YouTube API</a> was used to automatically set the title, description, tags, category, date to publish, and other miscellaneous metadata. Uploading the recorded videos was done manually, as in order to automatically upload videos, one has to let their project undergo an API audit by Google, which requires filling out a form and can take weeks for a response.</p>
      </div>
    </div>
  );
}

export default AutoTTRecorderYTProj;
