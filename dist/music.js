// Original 8-bar late-night electronic loop. No samples or external audio files.
export class StudioMusic {
  constructor() { this.context=null; this.master=null; this.timer=null; this.step=0; this.next=0; this.volume=.38; this.enabled=false; this.generation=0; }
  async start() {
    if(this.enabled) return;
    const Audio=globalThis.AudioContext||globalThis.webkitAudioContext;
    if(!Audio) return;
    this.context??=new Audio();
    if(!this.master) { this.master=this.context.createGain(); this.master.gain.value=0; this.master.connect(this.context.destination); }
    const generation=++this.generation;
    await this.context.resume();
    if(generation!==this.generation)return;
    this.enabled=true; this.next=this.context.currentTime+.06;
    this.master.gain.setTargetAtTime(this.volume*.28,this.context.currentTime,.15);
    this.schedule(); this.timer=setInterval(()=>this.schedule(),60);
  }
  stop() { this.generation++; this.enabled=false;clearInterval(this.timer);this.timer=null;if(this.master)this.master.gain.setTargetAtTime(0,this.context.currentTime,.035); }
  setVolume(value) { this.volume=Math.max(0,Math.min(1,value));if(this.master)this.master.gain.setTargetAtTime(this.enabled?this.volume*.28:0,this.context.currentTime,.08); }
  note(freq,time,length,gain,type='sine') {
    const c=this.context,o=c.createOscillator(),g=c.createGain();
    o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(.0001,time);g.gain.exponentialRampToValueAtTime(gain,time+.015);g.gain.exponentialRampToValueAtTime(.0001,time+length);o.connect(g);g.connect(this.master);o.start(time);o.stop(time+length+.03);
  }
  drum(time,hat=false) {
    const c=this.context;
    if(!hat){const o=c.createOscillator(),g=c.createGain();o.frequency.setValueAtTime(110,time);o.frequency.exponentialRampToValueAtTime(42,time+.13);g.gain.setValueAtTime(.18,time);g.gain.exponentialRampToValueAtTime(.0001,time+.2);o.connect(g);g.connect(this.master);o.start(time);o.stop(time+.21);return;}
    const b=c.createBuffer(1,c.sampleRate*.04,c.sampleRate),data=b.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*(1-i/data.length);
    const s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=b;f.type='highpass';f.frequency.value=6500;g.gain.value=.09;s.connect(f);f.connect(g);g.connect(this.master);s.start(time);
  }
  schedule() {
    if(!this.enabled)return;
    const c=this.context;if(this.next<c.currentTime)this.next=c.currentTime+.04;
    // 88 BPM, eight-note sequencer; Am9 / Fmaj7 / Cmaj9 / G6.
    const chords=[[220,261.63,329.63,493.88],[174.61,220,261.63,329.63],[130.81,196,246.94,293.66],[196,246.94,293.66,329.63]];
    while(this.next<c.currentTime+.18){const n=this.step%64,bar=Math.floor(n/16),beat=n%8,chord=chords[bar],t=this.next;
      if(n%16===0)chord.forEach(f=>this.note(f,t,4.9,.035,'triangle'));
      if(beat===0||beat===4)this.drum(t);
      if(beat%2===1)this.drum(t,true);
      if(beat===0||beat===3||beat===6)this.note(chord[0]/2,t,.25,.17,'sine');
      if([1,4,6].includes(beat))this.note(chord[(Math.floor(n/8)+beat)%4]*2,t,.7,.065,'sine');
      this.step++;this.next+=60/88/2;
    }
  }
}
