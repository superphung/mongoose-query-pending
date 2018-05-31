# mongoose-query-pending

you should first replace the URL variable with a correct mongo url

2 possible cases

A) with replica set cloud mongo
1.you should have wifi connection
2.try to call /test/data and it should work
3.turn off wifi
4.call /test/state until you receive a code 500 error
5.turn on wifi
6.call /test/state again and you should have {mongo: 1}
7.try to call /test/data again but the query is pending

B) with stand alone cloud mongo
1.you should have wifi connection
2.try to call /test/data and it should work
3.turn off wifi
why the app is crashing ?? Error: connection timeout
