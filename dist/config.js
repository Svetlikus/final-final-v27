export const LINES = [[0,0,0,0,0],[1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3],[0,1,2,1,0],[3,2,1,2,3],[0,0,1,0,0],[3,3,2,3,3],[1,0,0,0,1],[2,3,3,3,2],[1,2,3,2,1],[2,1,0,1,2],[0,1,1,1,0],[3,2,2,2,3],[1,1,0,1,1],[2,2,3,2,2],[0,1,2,3,3],[3,2,1,0,0],[0,2,0,2,0],[3,1,3,1,3]];
export const SYMBOLS=[
{id:'pen',name:'Bézier pen',pay:[2,5,12],weight:16,art:0},
{id:'coffee',name:'Chipped coffee',pay:[2,5,12],weight:16,art:1},
{id:'cable',name:'Tangled cable',pay:[3,6,15],weight:14,art:2},
{id:'swatch',name:'Cursed swatch',pay:[3,6,15],weight:14,art:3},
{id:'logo',name:'logo_FINAL.jpg',pay:[5,12,30],weight:11,art:4},
{id:'font',name:'Missing font',pay:[6,15,40],weight:10,art:5},
{id:'photo',name:'“Vector” photograph',pay:[8,20,50],weight:8,art:6},
{id:'folder',name:'FINAL_FINAL_v27',pay:[10,25,80],weight:7,art:7},
{id:'wild',name:'CMD+Z · Wild',pay:[15,40,100],weight:3,art:8}];
export const MODES={tiny:{name:'JUST ONE TINY CHANGE',short:'Tiny change',color:'pink',reel:1,desc:'A collector is guaranteed on every free spin.'},logo:{name:'MAKE THE LOGO BIGGER',short:'Logo bigger',color:'lime',reel:2,desc:'Rush Fee collectors carry 2×, 3×, 5× or 10× collection multipliers.'},pop:{name:'CAN YOU MAKE IT POP?',short:'Make it pop',color:'orange',reel:3,desc:'Effect multipliers can land on reels 1–4. They multiply collection awards only.'}};
export const CONFIG={initialCredits:100000,wagers:[100,200,500,1000],freeSpins:10,retriggerSpins:3,maxFreeSpins:30,cashMultiples:[.3,.5,1,2,5,10],cashWeights:[30,25,22,15,6,2],pinChance:.055,activationChance:.22,invoiceChance:.13,collectorChance:.36};
