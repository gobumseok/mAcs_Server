

export class GraphArray {
    
    public _adj : Array<any>;
    private _size : number;
    public _path : Array<number>;
    

    constructor(n : number){
        
        this._size = n;
        this._adj = new Array(this._size);

        for(let i = 0; i < this._size; i++){
            this._adj[i] = new Array(this._size);
            this._adj[i].fill(0);
        }
            
        this._path = new Array<number>();
        
        //this._adj =  number[this._size][this._size];
    }
    
    public AddEdge(a : number, b  : number,  cost : number = 1  )
    {
        this._adj[a][b] = cost;
        this._adj[b][a] = cost;
            
    }

    public Dijkstra(start : number, dest : number)
    {
        
        let visited   = new Array<Boolean>(this._size);
        let distance  = new Array<number>(this._size);
        let parent    = new Array<number>(this._size);

        visited.fill(false);
        distance.fill(Number.MAX_SAFE_INTEGER);
        parent.fill(0);
        
    
        distance[start] = 0;
        parent[start] = start;

        while (true)
        {
            //인접하면서 제일 가까운 후보를 찾기 
            let now = -1;
            let closest = Number.MAX_SAFE_INTEGER;

            for (let i = 0; i < this._size; i++)
            {
                //이미 방문했으면 스킵
                if (visited[i]){
                    console.log( i + '이미방문');
                    continue;
                }
                //시작점으로 부터 발견된 적 없는 경우
                if (distance[i] == Number.MAX_SAFE_INTEGER){
                    console.log( i + '처음 방문');
                    continue;
                }
                    

                //가장 가까운 후보를 기억하기
                if (distance[i] < closest)
                {
                    closest = distance[i];
                    now = i;
                }

            }

            if (now == -1)
                break;

            visited[now] = true;

            //방문한 정점과 인접한 정점중
            //최단 거리를 계산해서 갱신한다.
            for (let next = 0; next < this._size; next++){
                

                if (this._adj[now][next] == 0)
                    continue;
                if (visited[next])
                    continue;

                let nextDist = distance[now] + this._adj[now][next];

                //최단거리 갱신
                if (nextDist < distance[next])
                {
                    distance[next] = nextDist;
                    parent[next] = now;
                }
            }
        }

        //console.log( parent + '부모스');
        console.log( dest + '정리끝');
        this.CalcPathFromParent(parent, dest);
    }

    public CalcPathFromParent(parent : number[],dest : number){
        
        console.log('{dest}까지 최단 경로');
        while (parent[dest] != dest){
            this._path.push(dest);
            dest = parent[dest];
        }
        this._path.push(dest);
        console.log( this._path + '방문 뒤집기전');
        
        this._path.reverse();

        console.log( this._path + '방문 뒤집기');
        
        for(let n of this._path){
            console.log(n);
        }

        for(let i = 0 ; i < this._path.length; i++){
            console.log(this._path[i]);
        }
        

    }


}