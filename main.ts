import fs from'fs'
for(let d=0;++d<6;){
let I=process.env.MAKEFUN_INPUT_DIR||'/input',O=process.env.MAKEFUN_OUTPUT_DIR||'/output',n='/i00'+d,i=I+n,o=O+n,t=fs.readFileSync(i+'/level.txt')+'',w=t.indexOf('\n')+1,B=[[],[],[],[]],G=[[],[],[],[]],p=t.indexOf('@'),D=[-w,w,-1,1],m='',k,z,x,j,c
for(j=0,c;c=t[j];j++){
k=(j%w>6)*2+(j>=8*w)
c=='$'|c=='*'&&B[k].push(j)
;/[.+*]/.test(c)&&G[k].push(j)
}
const S=k=>{
let A=[...t].map(c=>c=='#'||c=='\n'),Q,V,u
for(z in B)for(x of B[z])A[x]=z-k
Q=[[B[k],p,'']];V={[B[k]+','+p]:1}
for(let[b,q,n]of Q){
if(b==G[k]+''){p=q;B[k]=G[k];return n}
let R={[q]:''},F=[q]
for(let y of F)for(j=4;j--;){
z=y+D[j]
if(A[z])continue
if(~b.indexOf(z)){
u=z+D[j]
if(A[u]|~b.indexOf(u))continue
let v=[...b];v[v.indexOf(z)]=u;v.sort((a,b)=>a-b)
if(V[c=v+','+z])continue
V[c]=1
Q.push([v,z,n+R[y]+'udlr'[j]])
}else if(!R[z]){R[z]=R[y]+'udlr'[j];F.push(z)}
}
}
return''}
for(k in B)m+=S(k)
fs.mkdirSync(o,{recursive:!0})
fs.writeFileSync(o+'/solution.txt',m)
}
