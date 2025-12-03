const allQuestions = [
  {
    "id": 1,
    "question": "1. What is the main purpose of formal methods of evaluating arguments?",
    "options": [
      "A) To make arguments shorter and easier to read.",
      "B) To rely on imagination to test validity.",
      "C) To eliminate imprecision and subjectivity by evaluating arguments by form rather than content.",
      "D) To depend on deep understanding of the statements' meanings."
    ],
    "correctIndex": 2,
    "explanation": "English: Think of it this way: Formal logic is like checking the structure of a building, not how pretty the paint is. We don't want to get distracted by what the argument is about (the content). We just want to see if the argument's framework (the form) is solid. By using symbols and rules, we strip away all the fuzzy language and subjective opinions, making the validity check a clear, mechanical process.\n中文: 你可以這樣理解： 形式邏輯就像在檢查一棟房子的結構，而不是它油漆得好不好看。我們不想被論證「在說什麼」（內容）分心。我們只想知道論證的「骨架」（形式）是否穩固。透過符號和規則，我們把所有模糊的語言和主觀的看法都排除掉，讓判斷有效性變成一個清楚、像機器操作一樣的流程。"
  },
  {
    "id": 2,
    "question": "2. What does 'propositional logic' (sentential logic) study?",
    "options": [
      "A) The psychological processes of belief formation.",
      "B) The logical relationships between propositions (statements).",
      "C) The grammar of natural languages only.",
      "D) Statistical relationships between variables."
    ],
    "correctIndex": 1,
    "explanation": "English: Simply put: Propositional logic is all about how we glue simple sentences together using logical words like \"and,\" \"or,\" and \"not.\" It doesn't care what the sentences mean in real life; it only cares about how their truth or falsity works when they're connected. It’s the traffic cop that directs the flow of truth between statements.\n中文: 簡單來說： 命題邏輯就是專門研究我們如何用「且」、「或」、「非」這些邏輯連接詞，把簡單的句子黏在一起。它不在乎這些句子在現實中「到底」是什麼意思，它只在乎當它們被連接起來時，它們的真假值是如何互相影響的。它就是那個管理語句間真假值流動的交通警察。"
  },
  {
    "id": 3,
    "question": "3. Which description best captures a truth-functional connective?",
    "options": [
      "A) Any word that connects two clauses in English regardless of meaning.",
      "B) A way of connecting propositions such that the truth of the complex depends on the truth of its components.",
      "C) A symbol that always makes a sentence true.",
      "D) A rule that changes words into symbols without affecting truth."
    ],
    "correctIndex": 1,
    "explanation": "English: The main idea here is predictability. A truth-functional connective is like a simple math function. If you know the input numbers (the truth values of the component statements, True or False), you can always calculate the output number (the truth value of the whole compound statement). The truth of the big sentence is a direct, predictable result of the truth of the small sentences.\n中文: 這裡的重點是「可預測性」。 真值函項連接詞就像一個簡單的數學函數。如果你知道輸入的數字（組成語句的真假值，真或假），你就可以永遠計算出輸出的數字（整個複合句的真假值）。大句子的真假值是小句子真假值的直接、可預測的結果。"
  },
  {
    "id": 4,
    "question": "4. When is a conjunction (P・Q) true?",
    "options": [
      "A) When at least one conjunct is false.",
      "B) Only when both conjuncts are true.",
      "C) Whenever P is true regardless of Q",
      "D) Only when both conjuncts are false."
    ],
    "correctIndex": 1,
    "explanation": "English: Think of \"conjunction\" (・, or \"and\") as a demanding requirement. If I say, \"I will eat pizza and drink soda,\" for that whole statement to be true, I must fulfill both conditions. If I only eat pizza but skip the soda, the statement is false. It's only successful (True) when both parts are successful (True).\n中文: 你可以把「合取句」 (・，也就是「且」) 想成一個要求很高的條件。 如果我說：「我要吃披薩而且喝汽水」，要讓這整個句子成立（為真），我必須兩個條件都做到。如果我只吃了披薩但沒喝汽水，那這個句子就是假的。它只有在兩邊都成功（為真）的時候，才會成功（為真）。"
  },
  {
    "id": 5,
    "question": "5. Which symbol is used for conjunction in the text’s symbolic language?",
    "options": [
      "A) The dot (・)",
      "B) The wedge (V)",
      "C) The tilde (~)",
      "D) The horseshoe (⊃)"
    ],
    "correctIndex": 0,
    "explanation": "English: This is a notation question. In many formal logic systems, especially the one used in the textbook, the dot (・) is the standard, simple symbol for \"and.\"\n中文: 這是一個符號慣例問題。 在許多形式邏輯系統中，特別是教材裡用的那套，點符號 (・) 就是代表「且」（and）這個邏輯操作的標準、簡單符號。在老師的投影片中，你可能也會看到用 Ʌ 這個符號，表示相同意思。"
  },
  {
    "id": 6,
    "question": "6. What does negation do to a proposition’s truth value?",
    "options": [
      "A) It makes it better.",
      "B) It flips it: true becomes false, false becomes true.",
      "C) It makes it both true and false.",
      "D) It makes it neither true nor false."
    ],
    "correctIndex": 1,
    "explanation": "English: Negation (～, or \"not\") is like a simple switch. It takes whatever the current truth value is and reverses it completely. If the original statement says \"It is True,\" adding negation makes it \"It is Not True\" (False). If the original statement says \"It is False,\" adding negation makes it \"It is Not False\" (True). It's a binary flip-flop.\n中文: 否定 (～，也就是「非」) 就像一個簡單的開關。 它會把當前的真假值完全反轉過來。如果原來的句子說「這是真的」，加上否定就變成「這不是真的」（假）。如果原來的句子說「這是假的」，加上否定就變成「這不是假的」（真）。它是一個二元的翻轉器。"
  },
  {
    "id": 7,
    "question": "7. Which symbol represents negation in this chapter?",
    "options": [
      "A) The biconditional ()",
      "B) The dot (・)",
      "C) The wedge (ｖ)",
      "D) The tilde (～)"
    ],
    "correctIndex": 3,
    "explanation": "Language Explanation (口語化解釋) English Again, this is standard logic notation. The tilde (～) is the widely accepted symbol for the negation operator, meaning \"it is not the case that\" or simply \"not.\" The others represent \"if and only if\" (≡), \"and\" (・), and \"or\" (v). 中文 (Chinese) 這也是標準的邏輯符號規範。 波浪號 (~) 是公認的否定運算符號，它的意思就是「情況並非如此」或簡單地說「非」。其他的符號分別代表「若且唯若」（≡）、「且」（・）和「或」（v）。"
  },
  {
    "id": 8,
    "question": "8. Which symbolic form correctly translates “Not both p and q”?",
    "options": [
      "A) ~(p・q)",
      "B) ~p・q",
      "C) p・~q",
      "D) ~p V ~q"
    ],
    "correctIndex": 0,
    "explanation": "English: Pay attention to where the \"not\" goes. \"Not both p and q \" means we are denying the possibility of the whole event (p and $q$ happening together). So, you must put the negation ($\\sim$) outside the parentheses, negating the entire conjunction $(p \\cdot q)$. If you chose B ($\\sim p \\cdot q$), that would mean \"Not-p and q,\" which allows $p$ to be false while $q$ is still true—a different meaning.\n中文: 要注意「非」這個詞的位置。 「非(p且q)」的意思是，我們否定了整個事件 (p 和q 同時發生) 的可能性。所以，你必須把否定符號 (~) 放在括號外面，去否定整個合取句p・q。如果你選了 B (~p・q)，那意思會變成「非p 而且q」，這允許p 是假，但q 仍然是真的——這是不同的意思。"
  },
  {
    "id": 9,
    "question": "9. A disjunction p v q is false when _________.",
    "options": [
      "A) both p and q are false.",
      "B) both p and q  are true.",
      "C) only p is false.",
      "D) only p is false."
    ],
    "correctIndex": 0,
    "explanation": "English: Think of \"disjunction\" (\"or\") as a very flexible option. If I say, \"I will bring coffee or I will bring donuts,\" for that statement to be True, I only need to do at least one of the two things. The only time the whole promise is broken (False) is when I fail on both parts—I bring neither coffee nor donuts.\n中文: 你可以把「選言句」 (p v q，也就是「或」) 想成一個很有彈性的選項。 如果我說：「我要帶咖啡或者帶甜甜圈」，要讓這句話是真的，我只需要做到兩件事中的至少一件。唯一會讓整個承諾落空（為假）的情況，就是我兩件事都沒做到——我既沒帶咖啡也沒帶甜甜圈。"
  },
  {
    "id": 10,
    "question": "10. Why can computers easily apply the truth-table test once an argument is translated into symbols?",
    "options": [
      "A) Because computers understand natural language better than humans.",
      "B) Because truth tables always return ‘valid’.",
      "C) Because translation to symbols is trivial and automatic.",
      "D) Because it’s a purely mechanical procedure that doesn’t require understanding meanings."
    ],
    "correctIndex": 3,
    "explanation": "English: Computers are great at following recipes. The truth-table test is basically a logical recipe: Check all possible T/F combinations according to a fixed set of rules. This process is completely mechanical—it's just moving True and False values around based on algorithms. It doesn't require any \"thinking\" or understanding of what \"justice\" or \"happiness\" means, which is why a computer can churn it out instantly.\n中文: 電腦非常擅長照著食譜做事。 真值表檢驗基本上就是一個邏輯食譜：根據一組固定的規則，檢查所有可能的「真」和「假」組合。這個過程是完全機械化的——它只是根據演算法來移動真假值。它不需要任何「思考」或理解「正義」或「幸福」這些詞的意思，所以電腦可以瞬間完成運算。"
  },
  {
    "id": 11,
    "question": "1. What is the main purpose of using parentheses in symbolic logic?",
    "options": [
      "A) To make the sentence look more mathematical.",
      "B) To show which parts of the sentence are questions.",
      "C) To group components of a complex sentence and indicate which connective is the main operator.",
      "D) To separate premises from conclusions."
    ],
    "correctIndex": 2,
    "explanation": "English: Think of parentheses like grouping symbols in math. They tell you the order in which to perform the logical operations. By grouping smaller sentences together, the parentheses clearly point to the one connective that holds the whole giant sentence together. That \"holder\" is the main operator. Without them, you wouldn't know the exact logical structure, which is vital for building a correct truth table.\n中文: 把括號想成數學中的分組符號（就像運算順序）。 它們告訴你要先做哪一個邏輯運算。透過將較小的句子群組起來，括號就清楚地指出哪個連接詞是把整個大句子「黏」在一起的。這個「膠水」就是主要連接詞 (main operator)。沒有括號，你就無法確定確切的邏輯結構，這對建立正確的真值表至關重要。"
  },
  {
    "id": 12,
    "question": "2. In the sentence (A v B) v C, which connective is the main operator?",
    "options": [
      "A) A.",
      "B) v between A and B.",
      "C) v between (A v B) and C.",
      "D) C."
    ],
    "correctIndex": 2,
    "explanation": "English: The main operator is the last one you apply. Since the expression (A v B) is trapped inside the parentheses, the first 'v' only connects A and B. The second 'v' is outside the parentheses, and it connects the entire (A v B) block to C. Because it governs the whole statement, the second 'v' is the main operator.\n中文: 主要連接詞就是你「最後才處理」的那一個。 由於 (A v B) 這個部分被關在括號裡，第一個 'v' 只連接了 A 和 B。而第二個 'v' 是在括號外面，它連接了整個 (A v B) 區塊和 C。因為它是負責管理整個語句的，所以第二個 'v' 就是主要連接詞。"
  },
  {
    "id": 13,
    "question": "3. \"Bob will not both go to class and play video games\" is best symbolized as:",
    "options": [
      "A) ~C ・ G.",
      "B) ~(C ・ G).",
      "C) ~C v G.",
      "D) ~(C v G)."
    ],
    "correctIndex": 1,
    "explanation": "English: The key phrase is \"not both.\" This means you are denying the joint occurrence of the two actions (C and G). You are saying: \"It is not the case that (he does both C AND G).\" So, the negation (~) must take the whole conjunction (C ・ G) into its scope.\n中文: 關鍵詞是「不會兩者都...」。 這代表你否定了這兩個動作 (C 和 G) 同時發生的可能性。你是在說：「情況並非如此 (他同時做了 C 和 G)」。因此，否定符號 (~) 必須把整個合取句 (C ・ G) 納入它的管轄範圍。"
  },
  {
    "id": 14,
    "question": "4. Which symbolic form correctly captures the structure of \"Tom is not both happy and relaxed\"?",
    "options": [
      "A) ~H ・ R.",
      "B) ~(H ・ R).",
      "C) ~H v ~R.",
      "D) H ・ ~R."
    ],
    "correctIndex": 1,
    "explanation": "English: This structure is identical to Question 3. The sentence denies the conjunction. It says, \"It is not the case that [Tom is happy AND Tom is relaxed].\" The negation (~) has wide scope over the \"・\".\n中文: 這個題目結構和第三題一模一樣。 這句話否定了兩件事情同時成立。它說：「並非 [Tom 既快樂 又 放鬆]。」否定詞 (~) 的範圍必須涵蓋整個 \"・\" 的連詞。 (小提醒：~H v ~R (C) 根據德摩根定律是邏輯等價的，但 ~(H ・ R) 是翻譯「不會兩者都...」這個英文結構最直接的方式。)"
  },
  {
    "id": 15,
    "question": "5. What is the main logical difference between ~(P ・ Q) and ~P ・ Q?",
    "options": [
      "A) They are just two different ways of writing the same thing.",
      "B) ~(P ・ Q) allows P and Q to be true together.",
      "C) ~P ・ Q says P is false and Q is true, while ~(P ・ Q) only says it is not the case that both are true.",
      "D) ~P ・ Q means at least one of P and Q is true."
    ],
    "correctIndex": 2,
    "explanation": "English: The difference is in the scope of the negation (~). ~P ・ Q is a very specific claim, requiring P to be False AND Q to be True. In contrast, ~(P ・ Q) is much broader: it is true in any case where P and Q are not both true (it only rules out the T, T row in the truth table). The difference lies entirely in where you place the parentheses.\n中文: 差別在於否定詞 (~) 的作用範圍。 ~P ・ Q 是一個非常明確的斷言，要求 P 必須是假 而且 Q 必須是真。相比之下，~(P ・ Q) 則寬鬆得多：它在所有 P 和 Q 沒有同時為真的情況下都為真（它只排除了真值表中的 T, T 一列）。兩者差異完全取決於你將括號放在哪裡。"
  },
  {
    "id": 16,
    "question": "6. \"Carla will have neither cake nor ice cream\" is best symbolized as:",
    "options": [
      "A) ~(C v ~ I).",
      "B) ~C ・ ~I.",
      "C) C v I.",
      "D) C ・ I."
    ],
    "correctIndex": 1,
    "explanation": "English: The phrase \"neither nor\" is really just two denials connected by \"and.\" It means \"not C AND not I.\" So, you deny the first thing (~C) and you deny the second thing (~I), and you connect those two denials with a conjunction (・).\n中文: 「既不...也不...」(neither nor) 這個片語，其實就是兩個「否定」用「且」連接起來。 它的意思就是「非 C 而且 非 I」。所以你否定第一件事情 (~C)，否定第二件事情 (~I)，然後用合取詞 (・) 將這兩個否定連接起來。"
  },
  {
    "id": 17,
    "question": "7. \"Tom will play either football or soccer, but not both\" is best symbolized as:",
    "options": [
      "A) F v S.",
      "B) F ・ S.",
      "C) ~(F v S).",
      "D) (F v S) ・ ~(F ・ S)."
    ],
    "correctIndex": 3,
    "explanation": "English: This is the definition of exclusive disjunction (\"exclusive or\"). The sentence has two main requirements connected by \"but.\" The first part, \"either F or S,\" is the basic disjunction (F v S). The second part, \"not both,\" is ~(F ・ S). Since \"but\" acts like \"and\" in logic, we join these two parts with a conjunction (・).\n中文: 這就是排他性選言句 (exclusive or) 的定義。 這個句子有兩個主要要求，用「但是」(but) 連接。第一部分，「要嘛 F 要嘛 S」，這是基本的選言 (F v S)。第二部分，「但不能兩者都」，就是 ~(F ・ S)。因為「但是」(but) 在邏輯中作用就像「而且」(and)，所以我們用合取詞 (・) 將這兩部分連接起來。"
  },
  {
    "id": 18,
    "question": "8. According to the truth table test of validity, when is an argument valid?",
    "options": [
      "A) When at least one row has all premises true and the conclusion false.",
      "B) When every row has the premises and conclusion all true.",
      "C) When for every assignment of truth values, if the premises are true then the conclusion is true.",
      "D) When the premises are actually true in the real world."
    ],
    "correctIndex": 2,
    "explanation": "English: Validity is about the structure, not the facts. An argument is valid if it's impossible for the premises to be true while the conclusion is false. The truth table checks every possible world (every row). If, in all those possible worlds where the premises are True, the conclusion is also True, then the argument is valid. It's a guarantee!\n中文: 有效性 (Validity) 講的是結構，而不是事實。 一個論證是有效的，如果「前提皆為真，結論卻為假」是不可能發生的。真值表檢查了所有可能的情況（每一列）。如果在所有那些「前提為真」的可能情況中，結論也都是「真」，那麼這個論證就是有效的。這是一種保證！"
  },
  {
    "id": 19,
    "question": "9. According to the truth table test of validity, what shows that an argument is invalid?",
    "options": [
      "A) A row where all premises and the conclusion are true.",
      "B) A row where at least one premise is false and the conclusion is false.",
      "C) A row where all premises are true and the conclusion is false.",
      "D) A row where all premises are false and the conclusion is true."
    ],
    "correctIndex": 2,
    "explanation": "English: This is the \"bad row\" that invalidity is looking for! An argument is invalid if you can find just one single case (one row in the table) where you have bought into all the premises (they are all True), but somehow the conclusion is still false. This single row is a counterexample that breaks the argument's guarantee.\n中文: 這就是無效性 (Invalidity) 正在尋找的那個「壞掉的列」！ 如果你能在真值表中找到僅僅一個情況（一列），在這個情況下，你已經接受了所有前提（它們都是真），但結論卻仍然是假，那麼這個論證就是無效的。這一列就是一個反例，它打破了論證的有效性保證。"
  },
  {
    "id": 20,
    "question": "10. In a truth table for an argument, what are the reference columns?",
    "options": [
      "A) The columns under the premises and conclusion.",
      "B) The columns that list each possible assignment of T and F for the atomic propositions.",
      "C) The columns that show only the main operator of each sentence.",
      "D) The columns that contain the final answer about validity."
    ],
    "correctIndex": 1,
    "explanation": "English: The reference columns are your starting point, your blueprint. They are the first columns on the left that lay out every single possible combination of True (T) and False (F) for every simple letter (like A, B, C) in the argument. Once you have that complete list of possibilities, you use those values as inputs to calculate the rest of the table.\n中文: 參考欄 (Reference Columns) 就是你的起點，你的藍圖。 它們是表格最左邊的幾欄，系統性地列出了論證中所有簡單字母（例如 A、B、C）所有可能的「真」(T) 和「假」(F) 組合。一旦你有了這份完整的可能性清單，你就可以使用這些值作為輸入，來計算表格的其餘部分。"
  },
  {
    "id": 21,
    "question": "1. In the conditional 'If it is raining, then the ground is wet', which part is the antecedent?",
    "options": [
      "A) It is raining.",
      "B) The ground is wet.",
      "C) It is raining and the ground is wet.",
      "D) If it is raining."
    ],
    "correctIndex": 0,
    "explanation": "English: The antecedent is the \"if\" clause. In any statement structured as \"If P, then Q,\" P is the antecedent. P is the condition that comes immediately after the \"If,\" which in this case is 'It is raining.' The word \"If\" itself is part of the conditional structure, not the antecedent P.\n中文: 前件就是「如果」子句。 在任何結構為「如果 P，那麼 Q」的語句中，P 就是前件 (antecedent)。P 是緊跟在「如果」之後的條件，在這個例子中就是「It is raining」。而「如果」(If) 這個詞本身是條件句結構的一部分，而不是前件 P。"
  },
  {
    "id": 22,
    "question": "2. Suppose your teacher, Andy, says: “If you don’t show up to class (P), then you will fail the course (Q).” According to the logic of an “if P, then Q” statement, in which situation is this statement FALSE (doesn’t hold)?",
    "options": [
      "A) You don’t show up to class, and you fail the course.",
      "B) You don’t show up to class, but you do NOT fail the course.",
      "C) You show up to class, and you fail the course.",
      "D) You show up to class, and you don’t fail the course."
    ],
    "correctIndex": 1,
    "explanation": "English: A conditional statement (P ⊃ Q) is only false in one situation: when the premise (antecedent, P) is True but the promised result (consequent, Q) is False. The promise is broken if 'You don’t show up' (P is True) AND 'You do NOT fail the course' (Q is False).\n中文: 條件句 (P ⊃ Q) 只有在一個情況下是假的： 當前提 (前件, P) 為真，但承諾的結果 (後件, Q) 卻為假時。如果「你沒來上課」(P 為真) 而且「你沒有被當掉」(Q 為假)，那麼這個承諾就被打破了（為假）。"
  },
  {
    "id": 23,
    "question": "3. Let P mean 'Tom passes the exam', S mean 'Tom is stupid', and L mean 'Tom is lazy'. How should we symbolize the sentence 'If Tom doesn’t pass the exam, then he is either stupid or lazy'?",
    "options": [
      "A) ~P ⊃ (S v L)",
      "B) P ⊃ (S v L)",
      "C) (~P & S) v L",
      "D) (~P v S) ⊃ L"
    ],
    "correctIndex": 0,
    "explanation": "English: Break the sentence into two main clauses connected by 'If...then...'. The antecedent is 'Tom doesn’t pass the exam,' which is the negation of P: ~P. The consequent is 'he is either stupid or lazy,' which is a disjunction: (S v L). Connect them with the conditional operator (⊃): ~P ⊃ (S v L).\n中文: 將句子拆解成用「如果...那麼...」連接的兩個主要子句。 前件是「Tom 沒有通過考試」，這是 P 的否定：~P。後件是「他要嘛愚蠢要嘛懶惰」，這是一個選言句：** (S v L)。然後用條件運算符號 (⊃) 將它們連接起來：~P ⊃ (S v L)**。"
  },
  {
    "id": 24,
    "question": "4. Which sentence correctly explains a necessary condition?",
    "options": [
      "A) If the condition happens, the result will always happen.",
      "B) The condition must be there, or the result cannot happen.",
      "C) The result will happen even if the condition is missing.",
      "D) If the result happens, the condition must also happen first."
    ],
    "correctIndex": 3,
    "explanation": "English: A necessary condition (N) is something required for a result (R). The definition means R cannot occur without N. Symbolically, this is R ⊃ N (\"If R, then N\"). Option D gives the most direct verbal translation: If the result (R) occurs, then the condition (N) must have been met.\n中文: 必要條件 (N) 是達成結果 (R) 所需的要素。 它的定義是 R 不可能在沒有 N 的情況下發生。用符號表示就是 R ⊃ N（「如果 R，那麼 N」）。選項 D 提供了最直接的口語翻譯：如果結果 (R) 發生了，那麼這個條件 (N) 就必須先發生。"
  },
  {
    "id": 25,
    "question": "5. Let R mean 'The Reds will win' and S mean 'The Reds’ starting pitcher is injured'. Which symbolic conditional best captures 'The Reds will win unless their starting pitcher is injured'?",
    "options": [
      "A) R ⊃ ~S",
      "B) S ⊃ R",
      "C) ~S ⊃ R",
      "D) R ⊃ S"
    ],
    "correctIndex": 2,
    "explanation": "English: The phrase \"P unless Q\" is translated as \"If not Q, then P\" (~Q ⊃ P). The primary winning condition (R) only happens if the injury condition (S) is not met. Therefore, we translate it as \"If the pitcher is not injured (~S), then the Reds will win (R)\": ~S ⊃ R.\n中文: 「P 除非 Q」這個片語通常被翻譯成「如果非 Q，那麼 P」 (~Q ⊃ P)。 主要的獲勝條件 (R) 只有在受傷條件 (S) 未達成時才會發生。因此，我們將其翻譯為「如果投手沒有受傷 (~S)，那麼紅隊將會獲勝 (R)」：~S ⊃ R。"
  },
  {
    "id": 26,
    "question": "6. Using the same R and S as in Question 5, which disjunction is truthfunctionally equivalent to 'The Reds will win unless their starting pitcher is injured'?",
    "options": [
      "A) R v ~S",
      "B) S v R",
      "C) ~S v ~R",
      "D) ~S v R"
    ],
    "correctIndex": 1,
    "explanation": "English: The phrase \"P unless Q\" is logically equivalent to the disjunction P v Q. If R is \"win\" and S is \"injured,\" then \"The Reds will win unless their pitcher is injured\" is equivalent to \"Either the Reds will win (R) or the pitcher is injured (S)\": R v S (which is the same as S v R). This is because the conditional ~S ⊃ R (from Q5) is equivalent to the disjunction ~~S v R, which simplifies to S v R.\n中文: 「P 除非 Q」這個片語在邏輯上等同於選言句 P v Q。 因此，它等同於「要嘛紅隊獲勝 (R)，要嘛投手受傷 (S)」：R v S（或 S v R）。這是因為條件句 ~S ⊃ R (來自第 5 題) 等同於選言句 ~~S v R，簡化後就是 S v R。"
  },
  {
    "id": 27,
    "question": "7. Two sentences of propositional logic “match each other” if and only if…",
    "options": [
      "A) They have the same symbols in the same order.",
      "B) They are both true in the actual world.",
      "C) They have the same truth value on every row of a truth table.",
      "D) They can both be expressed using conditionals."
    ],
    "correctIndex": 2,
    "explanation": "English: This is the definition of logical equivalence. Two sentences are logically equivalent if they are indistinguishable in terms of truth value, regardless of what the atomic propositions (P, Q, etc.) actually mean. Checking every single row of the truth table covers all possibilities.\n中文: 這就是邏輯等價 (logical equivalence) 的定義。 兩個句子在邏輯上是等價的，如果它們在真值方面無法區分，無論原子命題 (P、Q 等) 實際代表什麼。檢查真值表的每一列涵蓋了所有可能性。"
  },
  {
    "id": 28,
    "question": "8. Imagine you say two different sentences, but no matter what happens, they always end up being true or false together. Which pair below shows this kind of “always matching” behavior?",
    "options": [
      "A. “I will eat breakfast today.” and “I will exercise today.”",
      "B. “It’s not true that I will eat breakfast or exercise.” and “I will do neither — no breakfast and no exercise.”",
      "C. “I will eat breakfast and exercise.” and “I will eat breakfast or exercise.”",
      "D. “If I eat breakfast, then I will exercise.” and “If I exercise, then I will eat breakfast.”"
    ],
    "correctIndex": 1,
    "explanation": "These two sentences always have the same truth value in every possible scenario. Let P = \"I will eat breakfast\" and Q = \"I will exercise\". The first sentence is \"~(P v Q)\". The second sentence is \"~P & ~Q\". If you construct a truth table for both, you will find their final truth value columns are identical. 這兩個句子在所有可能的情況下，真值永遠相同。 設 P =「我今天會吃早餐」，Q =「我今天會運動」。第一個句子是「~(P v Q)」。第二個句子是「~P & ~Q」。如果你為這兩者建構一個真值表，你會發現它們最終的真值欄位是完全一樣的。"
  },
  {
    "id": 29,
    "question": "9. The biconditional p ≡ q is true when…",
    "options": [
      "A) at least one of p or q is true.",
      "B) p and q have the same truth value.",
      "C) p is false and q is true.",
      "D) p is true and q is false."
    ],
    "correctIndex": 1,
    "explanation": "English: The biconditional (≡) means \"If and only if.\" It’s like saying P and Q are chained together: they must be identical. The entire statement is only true when both parts (p and q) are either both true or both false. If one is true and the other is false, the chain is broken, and the statement is false.\n中文: 雙條件句 (≡) 的意思是「若且唯若」(If and only if)。 這就像說 P 和 Q 被鎖鍊綁在一起：它們的真假值必須完全一樣。只有當兩部分 (p 和 q) 要嘛都是真，要嘛都是假時，整個語句才為真。如果一個真一個假，鎖鍊就斷了，語句就為假。"
  },
  {
    "id": 30,
    "question": "10. Which sentence clearly expresses a biconditional relationship — meaning P and Q are true together and false together — using the idea of a “bachelor”?",
    "options": [
      "A) A man is a bachelor if he is unmarried.",
      "B) If a man is unmarried, then he might be a bachelor.",
      "C) A man is a bachelor if and only if he is an unmarried adult man.",
      "D) A man is unmarried only if he is a bachelor."
    ],
    "correctIndex": 2,
    "explanation": "English: The key phrase for a biconditional is \"if and only if.\" This means that the two ideas—being a bachelor (P) and being an unmarried adult man (Q)—are logically equivalent and require each other. P cannot be true without Q, and Q cannot be true without P. Option C uses this exact phrasing.\n中文: 雙條件句的關鍵詞是「若且唯若」(if and only if)。 這表示這兩個概念——成為單身漢 (P) 和成為未婚成年男性 (Q)——在邏輯上是等價的，並且是彼此的必要條件和充分條件。P 不可能在沒有 Q 的情況下為真，Q 也不可能在沒有 P 的情況下為真。選項 C 正是使用了這種精確的措辭。"
  },
  {
    "id": 31,
    "question": "1. Which rule of inference is correctly illustrated by the following argument? If it rains, the ground gets wet. It rains. ∴ The ground gets wet.",
    "options": [
      "A) Modus ponens",
      "B) Modus tollens",
      "C) Disjunctive syllogism",
      "D) Simplification"
    ],
    "correctIndex": 0,
    "explanation": "English: Modus Ponens (M.P.) is the rule of affirming the antecedent. It has the form: P ⊃ Q, P, therefore Q. The argument says, \"If it rains (P), then the ground gets wet (Q). It rains (P). Therefore, the ground gets wet (Q).\"\n中文: 肯定前件式 (Modus Ponens, M.P.) 是肯定條件句的前件的規則。它的形式是：如果 P 那麼 Q，P 為真，因此 Q 為真。這個論證是說：「如果下雨 (P)，那麼地會濕 (Q)。現在下雨了 (P)。因此，地是濕的 (Q)。」"
  },
  {
    "id": 32,
    "question": "2. Which rule of inference is correctly illustrated by the following argument? If the alarm is set, the building is secure. The building is not secure. ∴ The alarm is not set.",
    "options": [
      "A) Modus ponens",
      "B) Modus tollens",
      "C) Hypothetical syllogism",
      "D) Addition"
    ],
    "correctIndex": 1,
    "explanation": "English: Modus Tollens (M.T.) is the rule of denying the consequent. It has the form: P ⊃ Q, ~Q, therefore ~P. The argument denies the conclusion of the conditional (The building is not secure, ~Q) to deny the starting condition (The alarm is not set, ~P).\n中文: 否定後件式 (Modus Tollens, M.T.) 是否定條件句的後件的規則。它的形式是：如果 P 那麼 Q，非 Q 為真，因此非 P 為真。這個論證透過否定條件句的結論（大樓不安全，~Q）來否定其起始條件（警報未設定，~P）。"
  },
  {
    "id": 33,
    "question": "3. Which rule of inference is used in the following argument? If you study hard, you will pass the exam. If you pass the exam, you will graduate. ∴ If you study hard, you will graduate.",
    "options": [
      "A) Conjunction",
      "B) Hypothetical syllogism",
      "C) Constructive dilemma",
      "D) Disjunctive syllogism"
    ],
    "correctIndex": 1,
    "explanation": "English: Hypothetical Syllogism (H.S.) is the chain rule. It has the form: P ⊃ Q, Q ⊃ R, therefore P ⊃ R. The common term (passing the exam) links the two premises together to form a new conditional conclusion.\n中文: 假言三段論 (Hypothetical Syllogism, H.S.) 是鍊式規則。它的形式是：如果 P 那麼 Q，如果 Q 那麼 R，因此如果 P 那麼 R。兩個前提的共同項（通過考試）將它們連結起來，從而得出一個新的條件句結論。"
  },
  {
    "id": 34,
    "question": "4. Which rule of inference is correctly applied in the following? Either the keys are in the drawer or they are in the bag. The keys are not in the drawer. ∴ The keys are in the bag.",
    "options": [
      "A) Disjunctive syllogism",
      "B) Simplification",
      "C) Addition",
      "D) Constructive dilemma"
    ],
    "correctIndex": 0,
    "explanation": "English: Disjunctive Syllogism (D.S.) is the elimination rule. It has the form: P v Q, ~P, therefore Q. Given an \"either/or\" statement, if you deny one of the options, you must conclude the other option is true.\n中文: 選言三段論 (Disjunctive Syllogism, D.S.) 是排除規則。它的形式是：P 或 Q，非 P 為真，因此 Q 為真。當給定一個「要嘛/要嘛」的語句時，如果你否定了其中一個選項，你就必須推論出另一個選項是真的。"
  },
  {
    "id": 35,
    "question": "5. Which rule of inference is illustrated here? The light is on and the window is open. ∴ The light is on.",
    "options": [
      "A) Conjunction",
      "B) Simplification",
      "C) Modus tollens",
      "D) Addition"
    ],
    "correctIndex": 1,
    "explanation": "English: Simplification (Simp.) is the rule for extracting one part of a conjunction. It has the form: P ・ Q, therefore P (or Q). Since a conjunction (P ・ Q) is only true if both parts are true, knowing the conjunction is true allows you to simplify and state one part is true.\n中文: 簡化律 (Simplification, Simp.) 是從合取句中提取其中一部分的規則。它的形式是：P 且 Q，因此 P。由於合取句 (P ・ Q) 只有在兩部分都為真時才為真，知道合取句為真，就可以簡化並斷定其中一部分為真。"
  },
  {
    "id": 36,
    "question": "6. Which rule of inference is illustrated here? The meeting is today. The meeting is online. ∴ The meeting is today and online.",
    "options": [
      "A) Conjunction",
      "B) Addition",
      "C) Disjunctive syllogism",
      "D) Hypothetical syllogism"
    ],
    "correctIndex": 0,
    "explanation": "English: Conjunction (Conj.) is the rule for putting two true statements together. It has the form: P, Q, therefore P・Q. If you know that both P and Q are true independently, you can validly conclude that the conjunction of P and Q is also true.\n中文: 結合律 (Conjunction, Conj.) 是將兩個真語句組合在一起的規則。它的形式是：P 為真，Q 為真，因此 P 且 Q 為真。如果你分別知道 P 和 Q 都是真的，你就可以有效地推論出 P 和 Q 的合取句也是真的。"
  },
  {
    "id": 37,
    "question": "7. Which rule of inference is used in the following argument? The file is saved. ∴ The file is saved or the computer crashed.",
    "options": [
      "A) Addition",
      "B) Modus ponens",
      "C) Simplification",
      "D) Constructive dilemma"
    ],
    "correctIndex": 0,
    "explanation": "English: Addition (Add.) is the rule for creating a disjunction. It has the form: P, therefore P v Q. Since a disjunction (P v Q) is true if at least one of its parts is true, if you know P is true, you can add any Q to it with the \"or\" operator, and the resulting sentence will still be true.\n中文: 增添律 (Addition, Add.) 是創建選言句的規則。它的形式是：P 為真，因此 P 或 Q 為真。由於選言句 (P v Q) 只要其中至少一部分為真就是真的，因此如果你知道 P 是真的，你就可以用「或」運算符號隨意加上任何 Q，結果的語句仍然會是真的。"
  },
  {
    "id": 38,
    "question": "8. Which of the following best describes the rule of constructive dilemma as used in this argument? If we hire Alice, the project will be on time. If we hire Bob, the project will be on time. Either we hire Alice or we hire Bob. ∴ The project will be on time.",
    "options": [
      "A) It combines two conditionals with a disjunction to infer a disjunction.",
      "B) It denies the consequent of a conditional to deny its antecedent.",
      "C) It uses a chain of conditionals to infer a new conditional.",
      "D) It combines two conditionals with a disjunction to infer a single consequent."
    ],
    "correctIndex": 3,
    "explanation": "English: Constructive Dilemma (C.D.) in this specific form is used to force a conclusion when the consequents are identical. The form is: (A ⊃ C) ・ (B ⊃ C), A v B, therefore C. Since we know A leads to C, and B also leads to C, and we know either A or B must happen, we can conclude C must happen.\n中文: 構成兩難式 (Constructive Dilemma, C.D.) 在這個特定形式中，用於在後件相同時得出結論。其形式為：(A ⊃ C) ・ (B ⊃ C)，A v B，因此 C。由於我們知道 A 會導致 C，B 也會導致 C，而且我們知道 A 或 B 必須發生，因此我們可以推論出 C 必然會發生。"
  },
  {
    "id": 39,
    "question": "9. Which of the following English sentences best expresses a tautology (a statement that is true in every possible case)?",
    "options": [
      "A) Either it will rain tomorrow or it will not rain tomorrow.",
      "B) It is raining and it is not raining at the same time.",
      "C) If it is cold tomorrow, then it was hot yesterday.",
      "D) Either it is Monday and it is Tuesday at the same time."
    ],
    "correctIndex": 0,
    "explanation": "English: A tautology is a statement that is logically guaranteed to be true, regardless of the facts. This sentence has the form P v ~P (Law of Excluded Middle). Since 'P or not P' is always true, it is a tautology. Option B (P & ~P) is a contradiction, which is always false.\n中文: 恆真句 (Tautology) 是一個在邏輯上保證為真的語句，與事實無關。這個句子具有 P v ~P 的形式（排中律）。由於「P 或 非 P」永遠是真的，所以它是一個恆真句。選項 B (P & ~P) 是一個矛盾句，永遠是假的。"
  },
  {
    "id": 40,
    "question": "10. According to the method of constructing proofs with the 8 valid forms of inference, what is the main idea of \"working forward\" in a proof?",
    "options": [
      "A) Guess the truth values of all atomic propositions and build a truth table.",
      "B) Look at the premises and see which lines allow you to apply a rule to derive a new useful statement.",
      "C) Rewrite the conclusion in different symbols until it looks simpler.",
      "D) Assume the negation of the conclusion and try to get a contradiction in the truth table."
    ],
    "correctIndex": 1,
    "explanation": "English: Working forward means taking the initial true premises and applying the rules of inference (like Modus Ponens, Simplification, etc.) to derive new, true statements. This builds a chain of reasoning from the given information towards the desired conclusion.\n中文: 向前推導 (Working forward) 的意思是從給定的真前提開始，並應用推論規則（例如肯定前件式、簡化律等）來推導出新的、為真的語句。這建立了從給定資訊到所需結論的推理鏈。"
  },
  {
    "id": 41,
    "question": "1. Suppose the statement is P・Q. In which situation is this conjunction true?",
    "options": [
      "A) P is true and Q is false.",
      "B) P is false and Q is true.",
      "C) P is true and Q is true.",
      "D) P is false and Q is false."
    ],
    "correctIndex": 2,
    "explanation": "A conjunction (P・Q) is true if and only if both of its components (P and Q) are true. If either one is false, the entire conjunction is false. 連言句 (P・Q) 只有在其兩個組成部分（P 和 Q）都為真時才為真。只要其中任何一個為假，整個連言句就為假。"
  },
  {
    "id": 42,
    "question": "2. The book defines validity using truth tables. Which description is correct?",
    "options": [
      "A) An argument is valid if the premises are actually true.",
      "B) An argument is valid if and only if there is no row where all premises are true and the conclusion is false.",
      "C) An argument is valid if the conclusion is popular.",
      "D) An argument is valid if the argument sounds emotionally strong."
    ],
    "correctIndex": 1,
    "explanation": "Validity means it is logically impossible for the premises to be true while the conclusion is false. A row where all premises are true and the conclusion is false is called a counterexample. A valid argument must be free of counterexamples. 有效性 (Validity) 意指在邏輯上，不可能出現前提都為真，但結論為假的情況。一個有效的論證（使用真值表檢驗時）必須沒有任何反例行。"
  },
  {
    "id": 43,
    "question": "3. Which pattern does this argument use? If it rains, the streets get wet. It is raining. Therefore, the streets get wet.",
    "options": [
      "A) Affirming the consequent",
      "B) Modus ponens",
      "C) Modus tollens",
      "D) Disjunctive syllogism"
    ],
    "correctIndex": 1,
    "explanation": "This argument follows the structure: If P, then Q. P. Therefore, Q. This is the definition of Modus Ponens (MP), or \"Affirming the Antecedent,\" which is a valid argument form. 這個論證遵循「如果 P，那麼 Q。P。所以，Q」的結構。這是肯定前件式 (Modus Ponens) 的定義，是一個有效的推論形式。"
  },
  {
    "id": 44,
    "question": "4. What mistake? If it rains, streets get wet. It is not raining. Therefore streets are not wet.",
    "options": [
      "A) Valid modus ponens",
      "B) Valid modus tollens",
      "C) Fallacy of denying the antecedent",
      "D) Fallacy of affirming the consequent"
    ],
    "correctIndex": 2,
    "explanation": "The structure is: If P, then Q. Not P. Therefore, Not Q. This is an invalid argument form called the Fallacy of Denying the Antecedent. The streets could still be wet for another reason (e.g., a sprinkler) even if it is not raining. 這個結構是「如果 P，那麼 Q。非 P。所以，非 Q」。這是一個無效的論證形式，稱為否定前件的謬誤。因為即使沒有下雨，街道仍可能因其他原因而濕。"
  },
  {
    "id": 45,
    "question": "5. Choose the disjunctive syllogism:",
    "options": [
      "A) Either today or tomorrow. Today. Therefore not tomorrow.",
      "B) Either today or tomorrow. Not today. Therefore tomorrow.",
      "C) If today then see Alice. Today. Therefore see Alice.",
      "D) If today then not tomorrow. Tomorrow. Therefore not today."
    ],
    "correctIndex": 1,
    "explanation": "A Disjunctive Syllogism (DS) is a valid argument form with the structure: P or Q. Not P. Therefore Q. It concludes one disjunct by denying the other. 選言三段論 (Disjunctive Syllogism) 的有效形式是：「P 或 Q。非 P。所以，Q」。它透過排除其中一種可能性來證明另一種可能性必然成立。"
  },
  {
    "id": 46,
    "question": "6. When is a conditional P⊃Q false?",
    "options": [
      "A) Whenever Q is true.",
      "B) Only when both P and Q are false.",
      "C) Only when P is true and Q is false.",
      "D) Always false."
    ],
    "correctIndex": 2,
    "explanation": "A conditional statement (P⊃Q, \"If P, then Q\") is only considered false when its antecedent (P, the \"if\" part) is true, but its consequent (Q, the \"then\" part) is false. This is the only way a promise or condition is broken. 條件句 (P⊃Q) 只有在前件 (P) 為真而後件 (Q) 為假時才為假。在所有其他情況下，它都為真。"
  },
  {
    "id": 47,
    "question": "7. What valid form? If I study, I pass. If I pass, I graduate. Therefore if I study, I graduate.",
    "options": [
      "A) Modus ponens",
      "B) Modus tollens",
      "C) Hypothetical syllogism",
      "D) Disjunctive syllogism"
    ],
    "correctIndex": 2,
    "explanation": "This argument follows the chain structure: If P, then Q. If Q, then R. Therefore, if P, then R. This is the definition of Hypothetical Syllogism (HS), also known as the Chain Rule, which is a valid argument form. 這個論證遵循「如果 P，那麼 Q。如果 Q，那麼 R。所以，如果 P，那麼 R」的鏈式結構。這是假言三段論 (Hypothetical Syllogism) 的定義，是一種有效的推論形式。"
  },
  {
    "id": 48,
    "question": "8. Which is true about a valid argument?",
    "options": [
      "A) Valid arguments must have a counterexample row.",
      "B) Invalid arguments have no counterexample row.",
      "C) Valid arguments have no counterexample row.",
      "D) Invalid arguments cannot be shown using truth tables."
    ],
    "correctIndex": 2,
    "explanation": "A counterexample row is defined as a row in a truth table where all premises are True and the conclusion is False. Since validity means this scenario is impossible, a valid argument, by definition, has no counterexample rows. 「反例行」是指所有前提都為真但結論卻為假的那一行。根據有效性的定義，一個有效論證在邏輯上排除了這種情況，因此沒有任何反例行。"
  },
  {
    "id": 49,
    "question": "9. If a statement is a tautology, which of the following is true?",
    "options": [
      "A) It is true on every possible truth-value assignment.",
      "B) It is false on every possible assignment.",
      "C) It is sometimes true and sometimes false.",
      "D) It has no truth table."
    ],
    "correctIndex": 0,
    "explanation": "A tautology is a statement that is necessarily true due to its logical structure, meaning it is true under every possible combination of truth values for its simple components. 恆真句 (Tautology) 是指一個語句無論其組成部分的真值如何變化，它在邏輯上永遠為真。在其真值表欄位中，每一項都是「真」。"
  },
  {
    "id": 50,
    "question": "10. Consider the statement P ∨ Q. In which situation is the disjunction false?",
    "options": [
      "A) P true, Q false.",
      "B) P false, Q true.",
      "C) P true, Q true.",
      "D) P false, Q false."
    ],
    "correctIndex": 3,
    "explanation": "An inclusive disjunction (P ∨ Q), \"P or Q\") is true if at least one component is true. The only way for the entire disjunction to be false is if both components (P and Q) are false. 析取句 (P ∨ Q) 在至少一個組成部分為真時就為真。因此，只有當其兩個組成部分（P 和 Q）都為假時，整個析取句才為假。"
  }
];
