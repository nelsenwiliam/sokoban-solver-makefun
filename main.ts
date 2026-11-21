import fs from'fs'
for(let d=0;++d<6;){
let I=process.env.MAKEFUN_INPUT_DIR||'/input',O=process.env.MAKEFUN_OUTPUT_DIR||'/output',n='/i00'+d,t=fs.readFileSync(I+n+'/level.txt')+'',w=t.indexOf('\n')+1,B=[[],[],[],[]],p=t.indexOf('@'),D=[-w,w,-1,1],U='udlr',m='',k,j,c,z,x
for(j=0;c=t[j];j++)k=(j%w>6)*2+(j>=8*w),c=='$'|c=='*'&&B[k].push(j)
for(k in B){
let A=[...t].map(c=>c=='#'|c=='\n'),Q,V,u
for(z in B)for(x of B[z])A[x]=z-k
Q=[[B[k],p,'']];V={[B[k]+','+p]:1}
for(let[b,q,s]of Q){
if(b.every(x=>/[.+*]/.test(t[x]))){m+=s;p=q;B[k]=b;break}
let R={[q]:''},F=[q]
for(let y of F)for(j=4;j--;){
z=y+D[j]
if(A[z])continue
if(~b.indexOf(z)){
u=z+D[j]
if(A[u]|~b.indexOf(u))continue
let v=b.map(x=>x==z?u:x).sort((a,b)=>a-b)
if(V[c=v+','+z])continue
V[c]=1
Q.push([v,z,s+R[y]+U[j]])
}else if(!R[z])R[z]=R[y]+U[j],F.push(z)
}
}
}
fs.mkdirSync(O+n,{recursive:!0})
fs.writeFileSync(O+n+'/solution.txt',m)
}
