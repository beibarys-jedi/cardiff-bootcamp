1266  mkdir lecture-1
 1267  cd lecture-1
 1268  vi Readme.md
 1269  cd ..
 1270  git init
 1271  git config --global init.defaultBranch main
 1272  git branch -m main
 1273  ls 
 1274  ls -la
 1275  cd .git
 1276  cd ..
 1277  ls /.git
 1278  cd .git
 1279  ls
 1280  cd ..
 1281  git status
 1282  git add Readme.md
 1283  git add .
 1284  git status
 1285  git log
 1286  git commit --help
 1287  git commit -m "create readme, lecture1"
 1288  git status
 1289  git log
 1290  git push
 1291  git remote add origin git@github.com:beibarys-jedi/cardiff-bootcamp.git
 1292  git status
 1293  git log
 1294  git push
 1295  git push --set-upstream origin main
 1296  git log
 1297  git fetch
 1298  git log
 1299  git diff main origin/main
 1300  git pull
 1301  ls
 1302  git log
 1303  cd lecture-1
 1304  cat Readme.md
 1305  git branch
 1306  git checkout -b lesson-1
 1307  code .
 1308  cd ..
 1309  git status
 1310  git add .
 1311  git commit
 1312  git push
 1313  git status
 1314  git switch main 
 1315  git checkout lesson-1 
 1316  git checkout main
 1317  git status
 1318  git fetch
 1319  git pull 
 1320  git log

