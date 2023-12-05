#include <stdio.h>
#include <stdlib.h>

typedef struct listint 
{
    int n;
    struct listint *next;
} listint_t;

int is_palindrome(listint_t **head) {
    if (*head == NULL || (*head)->next == NULL) {
        return 1;
    }

    listint_t *slow = *head;
    listint_t *fast = *head;
    listint_t *prev = NULL;
    listint_t *temp;

    while (fast != NULL && fast->next != NULL) {
        fast = fast->next->next;
        temp = slow->next;
        slow->next = prev;
        prev = slow;
        slow = temp;
    }

    if (fast != NULL) {
        slow = slow->next;
    }

    while (slow != NULL) {
        if (prev->n != slow->n) {
            return 0; 
        }
        prev = prev->next;
        slow = slow->next;
    }

    return 1; 
}
