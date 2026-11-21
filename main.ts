import fs from'fs'
for(let d=0;++d<6;){
let i=(process.env.MAKEFUN_INPUT_DIR||'/input')+'/i00'+d,o=(process.env.MAKEFUN_OUTPUT_DIR||'/output')+'/i00'+d,t=fs.readFileSync(i+'/level.txt')+'',w=t.indexOf('\n'),s=t.replace(/\n/g,''),a=[],B=[],G=[],p=0,x
for(let j=0,c;c=s[j];j++){
a[j]=c=='#'
let k=(j%w>6)*2+(j/w>=8)
c=='$'|c=='*'&&(B[k]??=[]).push(j)
'.+*'.includes(c)&&(G[k]??=[]).push(j)
c=='@'|c=='+'&&(p=j)
}
let D=[-w,w,-1,1],m=''
const S=(A,G,B)=>{
let Q=[[B,p,'']],V={[B+','+p]:1},k,z,t,u
for(let s=0;s<Q.length;s++){
let[b,q,n]=Q[s]
if(b==G+''){p=q;return n}
let R={[q]:''},F=[q]
for(let y of F)for(let j=0;j<4;j++){
z=y+D[j]
if(A[z])continue
if(~b.indexOf(z)){
t=z+D[j]
if(A[t]|~b.indexOf(t))continue
u=b.slice();u[u.indexOf(z)]=t;u.sort((a,b)=>a-b)
if(V[k=u+','+z])continue
V[k]=1
Q.push([u,z,n+R[y]+'udlr'[j]])
}else if(!(z in R)){R[z]=R[y]+'udlr'[j];F.push(z)}
}
}
return''}
for(let k in B){
let A=a.slice()
for(let z in B)for(x of B[z])A[x]=z!=k
if(!(x=S(A,G[k],B[k])))break
m+=x
B[k]=G[k]
}
fs.mkdirSync(o,{recursive:!0})
fs.writeFileSync(o+'/solution.txt',m)
}
