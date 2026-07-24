# AI Development Workflow Comparison

## Round 1: Vague Prompt Approach

In the first round, a simple prompt was used to generate a React settings form. The output created a basic form with name, email, and password fields. The implementation was functional, but it lacked important details such as input validation, meaningful error messages, accessibility considerations, and handling of edge cases.

The generated code required more manual review because it did not consider user experience requirements. For example, users could submit empty fields, invalid email formats, or weak passwords without any feedback. The developer had to identify these missing cases and improve the implementation.

## Round 2: Precise Prompt Approach

In the second round, a more detailed approach was followed by specifying requirements such as validation rules, accessibility, error handling, and successful submission feedback. The resulting component was more structured and easier to review.

The second version included checks for empty names, invalid emails, and minimum password length. It also added labels and user feedback messages, making the form more accessible and user-friendly.

## Comparison

The main difference between both versions was the level of guidance provided to AI. The vague prompt produced a working but incomplete feature, while the precise prompt resulted in a more reliable implementation.

The second version reduced review effort because requirements were considered before generating the code. It also improved correctness by handling common edge cases.

One AI mistake caught during review was that the first generated version allowed users to submit invalid or empty information without any warning.

## Conclusion

Using AI effectively requires clear specifications, verification, and review. AI can accelerate development, but developers must define requirements and test the generated output to ensure quality.