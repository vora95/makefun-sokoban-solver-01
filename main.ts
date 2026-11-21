import fs from'fs'
let W,D,t,A,B,P,Z,d,m,v,C='rldu',F,V,G,I='/input/',O='/output/'
G=x=>x/W>8|2*(x%W>7)
F=(b,f)=>{let q=[f];d={[f]:''};m=f;for(let x of q)for(let k=4;k--;){let z=x+D[k];if(A[z]|b.includes(z)|Z.includes(z)|z in d)continue;d[z]=d[x]+C[k];q.push(z);if(z<m)m=z}}
V=p=>{F(B,p);let s={[m+':'+B]:1},q=[[B,p,'']];for(let[b,e,w]of q){if(b.every(x=>t[x]>41&t[x]<47)){Z.push(...b);v+=w;return e}F(b,e);let h=d;for(let i in b)for(let k=4;k--;){let x=b[i],f=x-D[k],u=x+D[k];if(!(f in h)|A[u]|b.includes(u))continue;let n=[...b];n[i]=u;n.sort((a,b)=>a-b);F(n,x);let j=m+':'+n;if(!s[j])s[j]=1,q.push([n,x,w+h[f]+C[k]])}}return 0}
fs.readdirSync(I).forEach(i=>{try{t=fs.readFileSync(I+i+'/level.txt');W=t.indexOf(10)+1;A=[];B=[];t.forEach((c,j)=>{A[j]=c%5==0;if(c%6==0)B.push(j);if(c>60)P=j});D=[1,-1,W,-W];let p=P,r=B;v='';Z=[];while(r.length){let g=G(r[0]),b=[],o=[];for(let x of r)(G(x)==g?b:o).push(x);r=o;B=b;p=V(p);if(!p)break}m=v}catch{m=''};fs.mkdirSync(O+i,{recursive:!0});fs.writeFileSync(O+i+'/solution.txt',m)})
