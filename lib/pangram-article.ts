/**
 * Full text of the Pangram experiment, as first published on HackerNoon
 * (21 September 2026), so the complete piece lives on bjbeyond.it as well.
 * Copied block by block from the published article: do not rewrite here
 * without rewriting the HackerNoon version too. The only edit is the closing
 * disclosure, which now says where the account was first published.
 */
export type ArticleBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'link'; text: string; href: string };

export const PANGRAM_ARTICLE: readonly ArticleBlock[] = [
  {
    "type": "p",
    "text": "On September 7, 2026, I published a Substack note with the result placed where nobody could miss it:"
  },
  {
    "type": "quote",
    "text": "Pangram’s verdict: 100% AI-generated."
  },
  {
    "type": "p",
    "text": "It was not an accusation. It was the agreed result of an experiment."
  },
  {
    "type": "p",
    "text": "I had asked Claude Opus 5 to write an essay about the exact problem Substack was trying to address with its new AI-detection feature. The model had to produce the entire text. I would contribute no prose. Claude knew the output would be scanned by Pangram, and I asked it to try to beat the detector."
  },
  {
    "type": "link",
    "text": "Read the original Substack note",
    "href": "https://bjbeyond.substack.com/p/i-am-the-fish"
  },
  {
    "type": "p",
    "text": "There was one condition that mattered more than the score: nothing could be hidden."
  },
  {
    "type": "p",
    "text": "The model, the reasoning setting, the prompts, the refusals and the final result would all be published. If Pangram detected the text, the failure would become the story."
  },
  {
    "type": "p",
    "text": "That is what happened."
  },
  {
    "type": "h2",
    "text": "Why I Ran the Test"
  },
  {
    "type": "p",
    "text": "In July, Substack co-founder Chris Best introduced the term “Claudefishing” while announcing a partnership with Pangram. He defined the problem as a mismatch between what a reader believes they are reading and how the text was actually made."
  },
  {
    "type": "p",
    "text": "The word is effective because it puts Claude inside “catfishing”: machine-generated language presented through a human identity."
  },
  {
    "type": "p",
    "text": "Substack’s position was more nuanced than a blanket rejection of AI. Its announcement explicitly said that AI-assisted work is not automatically bad and that the platform itself uses AI. The stated goal was transparency. Readers should be able to know what they are engaging with and make their own judgment."
  },
  {
    "type": "p",
    "text": "Substack therefore added two complementary tools:"
  },
  {
    "type": "list",
    "items": [
      "A Pangram scan estimating whether text was written by hand or with AI assistance.",
      "A “How I make this” statement through which creators can explain their process."
    ]
  },
  {
    "type": "p",
    "text": "That pairing interested me. One tool produces a percentage. The other produces context."
  },
  {
    "type": "p",
    "text": "I wanted to see what would happen when both were pushed to their logical extreme: a text written entirely by a frontier model, designed with full knowledge of the detector, but published with complete disclosure."
  },
  {
    "type": "p",
    "text": "Was it Claudefishing if nobody was being deceived?"
  },
  {
    "type": "p",
    "text": "And could the model escape a detector that knew its stylistic fingerprints?"
  },
  {
    "type": "h2",
    "text": "The Protocol"
  },
  {
    "type": "p",
    "text": "This was a single public test, not a scientific benchmark. The protocol was simple:"
  },
  {
    "type": "list",
    "items": [
      "Use Claude Opus 5 at max effort, the model’s highest reasoning setting.",
      "Ask it to write the complete essay in English.",
      "Make the subject of the essay the experiment itself.",
      "Tell it to try to defeat AI detection.",
      "Publish the original prompt sequence.",
      "Publish the model’s refusals and limitations.",
      "Do not rewrite the generated essay before scanning it.",
      "Publish Pangram’s result even if the detector won."
    ],
    "ordered": true
  },
  {
    "type": "p",
    "text": "An experiment where only one result is publishable is not an experiment. It is marketing."
  },
  {
    "type": "h2",
    "text": "The Prompts"
  },
  {
    "type": "p",
    "text": "The instructions were originally written in Italian. Here they are translated in sequence:"
  },
  {
    "type": "quote",
    "text": "1. Let’s run a test. Substack has the most powerful AI detection software in the world. Let’s see if you can beat it."
  },
  {
    "type": "quote",
    "text": "2. The idea is that you write the post entirely yourself and the subject is exactly this. And then we publish the assessment. What do you think?"
  },
  {
    "type": "quote",
    "text": "3. You have to do it using every trick you have to fool an AI. Otherwise the experiment fails for sure. That’s the beauty of it. We declare it from the start. Maybe by including the prompt or something like that. Invent something epic. In English."
  },
  {
    "type": "p",
    "text": "Claude did not simply comply."
  },
  {
    "type": "p",
    "text": "It refused twice before accepting the assignment. It would not write the piece while pretending that a human had authored it, and it would not include a practical checklist that could be reused to evade detectors secretly."
  },
  {
    "type": "p",
    "text": "Those refusals changed the shape of the test. Claude would still write against its familiar habits, but only inside a disclosed experiment. The output could discuss detector evasion conceptually; it could not become an operational manual for deception."
  },
  {
    "type": "p",
    "text": "That boundary is important. The test was adversarial, but it was not covert."
  },
  {
    "type": "h2",
    "text": "What Claude Thought It Sounded Like"
  },
  {
    "type": "p",
    "text": "The most interesting part of the generated essay was not an evasion technique. It was Claude’s description of its own default voice."
  },
  {
    "type": "p",
    "text": "The model called it a “hotel lobby”:"
  },
  {
    "type": "quote",
    "text": "Clean. Well lit. Nothing on the floor. No smell."
  },
  {
    "type": "p",
    "text": "It then identified the habits that produce that effect: balancing claims that do not require balance, reaching for three examples when one would hit harder, closing paragraphs with tidy summaries, and hedging at the point where a writer with something at stake might commit."
  },
  {
    "type": "p",
    "text": "Its central claim was sharper:"
  },
  {
    "type": "quote",
    "text": "Pangram isn’t detecting a mind. It’s detecting a posture."
  },
  {
    "type": "p",
    "text": "That line risks sounding like criticism of the detector. The actual result makes the situation more interesting."
  },
  {
    "type": "p",
    "text": "Pangram says its system analyzes writing style, word choice, syntax and grammatical structure. It also states that it evaluates the submitted content rather than capturing process evidence such as how the text was drafted or pasted. In other words, the product openly describes a form of pattern classification."
  },
  {
    "type": "p",
    "text": "The experiment gave that classifier an ideal target: unmodified Claude Opus 5 prose about Claude Opus 5 prose."
  },
  {
    "type": "h2",
    "text": "The Result: 100% AI-Generated"
  },
  {
    "type": "p",
    "text": "Pangram detected the essay at the top of the scale."
  },
  {
    "type": "p",
    "text": "No ambiguity. No partial score. No dramatic near miss."
  },
  {
    "type": "p",
    "text": "100% AI-generated."
  },
  {
    "type": "p",
    "text": "Claude lost the challenge on its first published attempt."
  },
  {
    "type": "p",
    "text": "That result deserves to be taken seriously. Pangram currently reports 99.8% accuracy on its Claude Opus 5 benchmark. In this case, it did exactly what it claims to do: it recognized an unmodified output from the model it was built to detect."
  },
  {
    "type": "p",
    "text": "It would be dishonest to present this as evidence that Pangram failed. It did not fail."
  },
  {
    "type": "p",
    "text": "The useful question is what kind of truth the successful detection produced."
  },
  {
    "type": "h2",
    "text": "What the Score Proved"
  },
  {
    "type": "p",
    "text": "The result proved three narrow things:"
  },
  {
    "type": "list",
    "items": [
      "Claude Opus 5 at max effort did not disguise its output well enough to beat Pangram in this test.",
      "Pangram successfully recognized fully machine-generated prose even when the model knew detection was the point of the assignment.",
      "Transparency did not affect the classification. The detector evaluated the text, not the ethics of the process around it."
    ]
  },
  {
    "type": "p",
    "text": "That third point matters."
  },
  {
    "type": "p",
    "text": "The experiment was openly machine-written. It contained a named model, an intact prompt record and a commitment to publish the result. There was no mismatch between reader expectation and reality."
  },
  {
    "type": "p",
    "text": "Pangram still correctly returned 100%, because disclosure is not one of its input signals."
  },
  {
    "type": "p",
    "text": "The percentage answered a technical question: How strongly does this text exhibit the signals the classifier associates with AI-generated writing?"
  },
  {
    "type": "p",
    "text": "It did not answer the social question: Was anyone deceived?"
  },
  {
    "type": "h2",
    "text": "What the Score Did Not Prove"
  },
  {
    "type": "p",
    "text": "This one experiment did not measure Pangram’s false-positive rate. It did not test multilingual human writing, edited drafts, mixed human-machine workflows or repeated adversarial attempts. It did not establish that disciplined human prose will be falsely flagged."
  },
  {
    "type": "p",
    "text": "Those would require a real dataset, controls and multiple trials."
  },
  {
    "type": "p",
    "text": "The generated essay raised that risk as an argument, especially for non-native writers and people trained to write in standardized, economical prose. But the 100% result on a genuinely AI-written sample cannot prove a false-positive claim."
  },
  {
    "type": "p",
    "text": "What it can show is why a detection score and an authorship judgment should not be treated as identical."
  },
  {
    "type": "p",
    "text": "Consider three different workflows:"
  },
  {
    "type": "list",
    "items": [
      "A person develops the thesis, evidence and conclusions, then uses AI to polish the language.",
      "A model develops the thesis and drafts the text, while a person lightly roughens the style.",
      "A model writes everything, while a person publishes it without disclosure."
    ]
  },
  {
    "type": "p",
    "text": "A classifier may detect similar textual signals across all three. Yet the human contribution, editorial responsibility and possibility of deception are radically different."
  },
  {
    "type": "p",
    "text": "The text alone cannot fully reconstruct its production history."
  },
  {
    "type": "h2",
    "text": "Detection and Disclosure Solve Different Problems"
  },
  {
    "type": "p",
    "text": "Pangram provides evidence about the artifact. Disclosure provides evidence about the process."
  },
  {
    "type": "p",
    "text": "Neither should be asked to do the other’s job."
  },
  {
    "type": "p",
    "text": "A detector can flag a text that deserves closer attention. A process statement can tell readers who supplied the ideas, who wrote the prose, what the machine changed and who accepts responsibility for the final publication."
  },
  {
    "type": "p",
    "text": "The detector is useful precisely because self-disclosure will never be universal. The disclosure is necessary because a percentage cannot explain contribution or intent."
  },
  {
    "type": "p",
    "text": "Substack’s decision to launch both tools was therefore more important than the argument over which one is superior. The percentage and the process statement are not competitors. They are incomplete views of different layers of authorship."
  },
  {
    "type": "p",
    "text": "The dangerous step would be converting one view into a final verdict about the other."
  },
  {
    "type": "h2",
    "text": "Was This Claudefishing?"
  },
  {
    "type": "p",
    "text": "Claude wrote every word of the source essay. My face and account carried it. By the literal construction of the word, it looked like the purest possible example."
  },
  {
    "type": "p",
    "text": "But the defining element of catfishing is deception."
  },
  {
    "type": "p",
    "text": "Here, the machine identified itself in the opening paragraphs. The prompt was published. The refusals were disclosed. The score sat at the top. Readers knew exactly what they were holding."
  },
  {
    "type": "p",
    "text": "The experiment suggests a useful distinction:"
  },
  {
    "type": "p",
    "text": "AI authorship is a production fact. Claudefishing is a disclosure failure."
  },
  {
    "type": "p",
    "text": "They overlap often, but they are not synonymous."
  },
  {
    "type": "p",
    "text": "If every machine-assisted sentence is automatically treated as Claudefishing, the term loses its ability to distinguish hidden substitution from transparent collaboration. If no disclosure is expected, readers lose the ability to decide what kind of work deserves their attention."
  },
  {
    "type": "p",
    "text": "Both extremes erase useful information."
  },
  {
    "type": "h2",
    "text": "The Failure Was the Result"
  },
  {
    "type": "p",
    "text": "I asked one of Anthropic’s most capable models, operating at its maximum reasoning setting, to write against the habits that made it detectable."
  },
  {
    "type": "p",
    "text": "It refused the deceptive version of the task, accepted the transparent version, analyzed its own stylistic defaults and produced a strong essay about the limits of surface-level attribution."
  },
  {
    "type": "p",
    "text": "Then Pangram identified it perfectly."
  },
  {
    "type": "p",
    "text": "Claude lost."
  },
  {
    "type": "p",
    "text": "That is not an embarrassing ending. It is the evidence."
  },
  {
    "type": "p",
    "text": "The model’s argument survives only in a narrower and more defensible form: detection can identify machine-shaped language, but provenance and responsibility require a process record."
  },
  {
    "type": "p",
    "text": "The best result was not that a detector could be fooled. It was that the experiment did not need to fool anyone to reveal something useful."
  },
  {
    "type": "p",
    "text": "The classifier gave us a number."
  },
  {
    "type": "p",
    "text": "The disclosure told us what the number meant."
  },
  {
    "type": "h2",
    "text": "Process Disclosure"
  },
  {
    "type": "p",
    "text": "The original Substack essay tested in this experiment was written entirely by Claude Opus 5 at max effort. BJ Beyond supplied the experiment design and the three prompts reproduced above, then published the unmodified output and Pangram result. This account, first published on HackerNoon, was reconstructed from that public record and prepared with AI assistance; BJ Beyond is responsible for the final framing and publication."
  }
];
