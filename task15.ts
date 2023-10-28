/**
 * Task # 15
 * Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send
 * out a new set of invitations. You’ll have to think of someone else to invite.
 * • Start with your program from Exercise 14. Add a print statement at the end of your program stating
 *   the name of the guest who can’t make it.
 * • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
 * • Print a second set of invitation messages, one for each person who is still in your list.
 * Date : 10/02/2022
 */
console.log("\nTask # 15\n");

var guests: string[] = [
  "Junaid Pasha",
  "Rana Zafar",
  "Shariq Abdul Baqi",
  "Zulfiqar",
];

for (var guest of guests) {
  console.log(
    `Dear ${guest}! You are cordially invited on 18th Feb 2023 on My Son Tabraiz's birthday`
  );
}
console.log(`\n${guests[1]} can't attend the birthday\n`);

guests[1] = "Rehan";
for (var guest of guests) {
  console.log(
    `Dear ${guest}! You are cordially invited on 18th Feb 2023 on My Son Tabraiz's birthday`
  );
}
