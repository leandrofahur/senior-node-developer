import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import { AnswersRepository } from "../repositories/answers-repository";
import { Answer } from "../entities/answer";

const answersRepositoryMock: AnswersRepository = {
  create: async (answer: Answer) => {
    return;
  },
};

test(`create an answer`, async () => {
  const answerQuestion = new AnswerQuestionUseCase(answersRepositoryMock);
  const answer = await answerQuestion.execute({
    instructorId: "1",
    questionId: "2",
    content: "Answer content",
  });

  expect(answer.content).toEqual("Answer content");
});
