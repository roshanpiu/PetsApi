curl -s -H "Content-Type: application/json" -X POST -d '{"name":"jessy","age":3,"type":"cat"}' http://localhost:3001/cat 
curl -s -H "Content-Type: application/json" -X POST -d '{"name":"piumal","age":4,"type":"cat"}' http://localhost:3001/cat
curl -s -X GET http://localhost:3001/cat 

curl -s -H "Content-Type: application/json" -X POST -d '{"name":"jessy","age":3,"type":"dog"}' http://localhost:3002/dog 
curl -s -H "Content-Type: application/json" -X POST -d '{"name":"piumal","age":4,"type":"dog"}' http://localhost:3002/dog
curl -s -X GET http://localhost:3002/dog 