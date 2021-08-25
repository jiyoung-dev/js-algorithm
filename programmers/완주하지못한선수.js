const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

function solution(participant, completion) {
  // 문자열순으로 정렬 
  participant.sort()
  completion.sort()

  // participanet 길이만큼 순회하면서 completion 요소와 다른걸 발견하면 해당요소 반환
  for(let i=0; i<participant.length; i++){
    if(participant[i] !== completion[i]){
      return participant[i];
    }
  }
}

// expected answer
// "leo"
