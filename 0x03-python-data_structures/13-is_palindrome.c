#include <stdio.h>
#include <stdlib.h>

typedef struct listint {
    int data;
    struct listint *next;
} listint_t;

listint_t* reverseList(listint_t* head) {
    listint_t *prev = NULL, *current = head, *next = NULL;
    while (current != NULL) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

int is_palindrome(listint_t **head)
{
    if (*head == NULL || (*head)->next == NULL){
        return 1; // An empty list or a list with one element is a palindrome
    }

    listint_t *slow = *head, *fast = *head;

    // Find the middle of the linked list
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
    }
 listint_t* reversedSecondHalf = reverseList(slow);

    listint_t *firstHalf = *head, *secondHalf = reversedSecondHalf;
    while (secondHalf != NULL) {
        if (firstHalf->data != secondHalf->data) {
            return 0; // Not a palindrome
        }
        firstHalf = firstHalf->next;
        secondHalf = secondHalf->next;
    }

    return 1;
}
