import assert from 'node:assert/strict';
import {LINES,SYMBOLS,CONFIG,makeGrid,lineWins,collection,triggered} from './dist/math.js';
const fill=id=>Array.from({length:5},()=>Array.from({length:4},()=>({id})));
assert.equal(LINES.length,20);assert.equal(new Set(LINES.map(x=>x.join())).size,20);
for(const line of LINES){assert.equal(line.length,5);assert(line.every(r=>r>=0&&r<4))}
let grid=fill('pen');assert.equal(lineWins(grid,200).reduce((a,w)=>a+w.amount,0),2400);
grid=fill('wild');assert.equal(lineWins(grid,200).reduce((a,w)=>a+w.amount,0),20000);
grid=fill('invoice');assert.equal(lineWins(grid,200).length,0);
grid=fill('coffee');grid[0]=grid[0].map(()=>({id:'pin',mode:'logo'}));assert.equal(lineWins(grid,200).length,0);
grid=fill('pen');grid[1]=grid[1].map(()=>({id:'wild'}));assert.equal(lineWins(grid,200).length,20);
grid=fill('pen');grid[0][0]={id:'invoice',value:100};grid[2][2]={id:'invoice',value:250};grid[4][1]={id:'rush',mult:3};grid[1][2]={id:'effect',mult:2};grid[3][2]={id:'effect',mult:5};assert.equal(collection(grid).amount,10500);grid[4][1]={id:'coffee'};assert.equal(collection(grid).amount,0);
grid=fill('pen');for(const [i,mode] of ['tiny','logo','pop'].entries())grid[i+1][0]={id:'pin',mode};assert.deepEqual(triggered(grid,()=>.99).sort(),['logo','pop','tiny']);grid[3][0]={id:'pen'};assert.deepEqual(triggered(grid,()=>.99),[]);assert.equal(triggered(grid,()=>0).length,2);
let seed=27;const rng=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};let count=0;for(const modes of [[],['tiny'],['logo'],['pop'],['tiny','logo','pop']]){for(let i=0;i<1000;i++){grid=makeGrid(200,modes,rng);const c=collection(grid);assert.equal(grid.length,5);assert(grid.every(col=>col.length===4));assert(c.collectors.length<=1);if(modes.includes('tiny'))assert.equal(c.collectors.length,1);for(let col=0;col<5;col++)for(const s of grid[col]){if(s.id==='pin')assert.equal(col,{tiny:1,logo:2,pop:3}[s.mode]);if(s.id==='invoice'||s.id==='effect')assert(col<4);if(s.id==='rush'&&modes.includes('logo'))assert(s.mult>=2);if(s.id==='effect')assert(modes.includes('pop'));}const total=lineWins(grid,200).reduce((a,w)=>a+w.amount,0)+c.amount;assert(Number.isSafeInteger(total)&&total>=0);count++;}}
console.log(`PASS: 20 unique lines; wild substitution and exclusions; collection arithmetic and effect products; pin activation; ${count} generated rounds across every mode.`);

const {resolveMorale}=await import('./dist/morale.js');
assert.deepEqual(resolveMorale(28,0,200),{value:26,change:-2});
assert.deepEqual(resolveMorale(28,1,200),{value:34,change:6});
assert.deepEqual(resolveMorale(28,1000,200),{value:42,change:14});
assert.deepEqual(resolveMorale(28,4000,200),{value:52,change:24});
assert.deepEqual(resolveMorale(28,20000,200),{value:60,change:32});
assert.deepEqual(resolveMorale(28,100000,200),{value:73,change:45});
assert.deepEqual(resolveMorale(99,1,200),{value:100,change:1});
assert.deepEqual(resolveMorale(2,0,200),{value:2,change:0});
let mood=28;for(let i=0;i<8;i++)mood=resolveMorale(mood,10,200).value;assert.equal(mood,76);
console.log('PASS: morale rises on every payout, scales by win tier, and stays between 2% and 100%.');
