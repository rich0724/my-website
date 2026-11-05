(function () {
  const STORAGE_KEY = "teamstore_workspace_v1";

  const defaultState = {
    theme: "light",
    activeTab: "all", // all, roles, archive, mindmap, meeting, report
    currentUser: "이준행",
    room: {
      code: "TP-2026",
      pin: "0724",
      course: "인공지능기초와 활용 (01분반)",
      teamName: "3조 · 폴라포 팀",
      goal: "생성형 AI 기반 대학생 협업 생산성 분석 및 프로토타입 발표",
      dday: "2026-11-12T23:59",
      checkpointDday: "2026-11-08T18:00"
    },
    stages: [
      { id: 1, title: "1단계 · 주제 및 방향성", status: "locked", desc: "생성형 AI 협업 웹 서비스 기획으로 전원 합의 완료", lockedAt: "11월 02일 확정 잠금" },
      { id: 2, title: "2단계 · 목차 및 역할 분담", status: "locked", desc: "서론·현황분석·프로토타입·기대효과 4대 목차 확정", lockedAt: "11월 04일 확정 잠금" },
      { id: 3, title: "3단계 · 자료 취합 (50% 중간점검)", status: "active", desc: "각 파트별 논문·통계 자료 아카이브 업로드 및 교차 피드백", lockedAt: "진행 중 (마감 18시간 전)" },
      { id: 4, title: "4단계 · PPT 통합 및 최종 발표", status: "pending", desc: "최종 슬라이드 디자인 통일 및 발표 리허설", lockedAt: "대기 중" }
    ],
    members: [
      { id: "m1", name: "이준행", role: "조장 · 아키텍처", studentId: "20265283", color: "#0066cc", status: "online", lastSeen: "현재 접속 중", unread: 0, checkpointDone: true, filesCount: 4, altComments: 5, attendance: 100 },
      { id: "m2", name: "김서연", role: "PPT · 시각화 디자인", studentId: "20261104", color: "#28cd41", status: "online", lastSeen: "현재 접속 중", unread: 0, checkpointDone: true, filesCount: 3, altComments: 4, attendance: 100 },
      { id: "m3", name: "박도윤", role: "선행논문 · 통계 조사", studentId: "20253091", color: "#ff9500", status: "recent", lastSeen: "2시간 전 확인", unread: 1, checkpointDone: true, filesCount: 2, altComments: 2, attendance: 90 },
      { id: "m4", name: "최지우", role: "발표 대본 · Q&A 대비", studentId: "20264419", color: "#af52de", status: "recent", lastSeen: "4시간 전 확인", unread: 1, checkpointDone: false, filesCount: 2, altComments: 2, attendance: 85 },
      { id: "m5", name: "정민호", role: "사례 조사 파트 2", studentId: "20249981", color: "#ff3b30", status: "offline", lastSeen: "38시간째 미접속 🚨", unread: 4, checkpointDone: false, filesCount: 0, altComments: 0, attendance: 40, nudges: 1 }
    ],
    tasks: [
      { id: "t1", title: "전체 기획안 목차 설계 및 요구사항 정의", assignee: "이준행", points: 35, checkpoint: "완료", status: "done", updatedAt: "11/04 19:20" },
      { id: "t2", title: "프로토타입 핵심 기능 화면 설계 및 총괄 취합", assignee: "이준행", points: 45, checkpoint: "진행중", status: "in_progress", updatedAt: "방금 전" },
      { id: "t3", title: "발표용 메인 PPT 템플릿 및 인포그래픽 제작", assignee: "김서연", points: 35, checkpoint: "진행중", status: "in_progress", updatedAt: "1시간 전" },
      { id: "t4", title: "국내 대학생 팀플 고충 설문 통계(대학내일·학보사) 수집", assignee: "박도윤", points: 25, checkpoint: "완료", status: "done", updatedAt: "어제" },
      { id: "t5", title: "10분 발표 스크립트 작성 및 예상 질문 5선 정리", assignee: "최지우", points: 20, checkpoint: "대기", status: "todo", updatedAt: "어제" },
      { id: "t6", title: "기존 협업 툴(노션·카톡·캔바) 한계점 비교표 작성", assignee: "정민호", points: 15, checkpoint: "미제출 🚨", status: "overdue", updatedAt: "38시간 전" }
    ],
    resources: [
      {
        id: "r1",
        category: "통계·데이터",
        title: "대학생 87.4% '조별과제에서 무임승차 및 일정 조율 스트레스 경험' 실태조사",
        summary: "대학내일20대연구소 및 대학 학보사 연합 설문 결과. 가장 큰 고통 1위는 일정 조율(34%), 2위는 무임승차 및 연락두절(29%), 3위는 툴 파편화 및 역할 편중(21%)으로 집계됨.",
        url: "https://www.20slab.org",
        author: "박도윤",
        createdAt: "11월 05일 16:40",
        tags: ["설문통계", "서론근거", "인포그래픽용"],
        comments: [
          { id: "c1", author: "김서연", type: "approve", text: "PPT 2페이지 문제제기 장표에 도넛 차트로 바로 넣겠습니다! 수치 출처가 명확해서 좋아요.", alt: "", time: "11월 05일 17:05" },
          { id: "c2", author: "이준행", type: "critique", text: "단순 설문 비율만 있으면 교수님이 해결책과의 연결고리를 물어보실 수 있습니다.", alt: "설문 항목 옆에 우리 웹사이트의 '7대 해결 기능'을 1:1 화살표로 매칭하는 비교 표를 추가합시다.", time: "11월 05일 18:12" }
        ]
      },
      {
        id: "r2",
        category: "논문·학술",
        title: "온라인 팀 기반 학습(TBL)에서 동료평가와 실시간 피드백이 무임승차 감소에 미치는 영향",
        summary: "실시간 기여도 가시화(Visibility)와 중간 체크포인트 제도를 도입했을 때 팀 내 무임승차 발생률이 68% 감소하고 결과물 만족도가 1.8배 상승한다는 학술 근거.",
        url: "https://www.riss.kr",
        author: "이준행",
        createdAt: "11월 05일 20:15",
        tags: ["RISS논문", "이론적배경", "기여도시스템"],
        comments: [
          { id: "c3", author: "최지우", type: "comment", text: "발표 대본에서 '왜 기여도 실시간 공개가 필요한지' 설명할 때 이 논문 인용하면 설득력 최고겠네요!", time: "11월 05일 21:00" }
        ]
      },
      {
        id: "r3",
        category: "PPT·초안",
        title: "발표 스토리라인 목차 및 Apple Store 감성 슬라이드 와이어프레임 v1",
        summary: "1. 팀플 7대 문제 정의 → 2. 기존 카톡·노션의 한계 → 3. 올인원 팀플 스토어 시연(마인드맵·AI녹음·공평분배) → 4. 기대효과 및 Q&A 구성안.",
        url: "https://github.com/rich0724/my-website",
        author: "김서연",
        createdAt: "오늘 00:30",
        tags: ["스토리라인", "PPT초안", "시연흐름"],
        comments: []
      }
    ],
    mindmap: {
      selectedNodeId: "n2",
      nodes: [
        { id: "n1", parentId: null, title: "대학 팀플 올인원 웹 기획", author: "이준행", type: "root", x: 50, y: 50, votes: 5, adopted: true, reason: "중심 프로젝트 주제", alt: "" },
        { id: "n2", parentId: "n1", title: "방 링크 + 4자리 비번 즉시 입장", author: "이준행", type: "idea", x: 22, y: 24, votes: 5, adopted: true, reason: "노션처럼 회원가입·권한 설정하다 지치는 문제 해결", alt: "카카오톡 공유 시 1클릭 입장 코드 자동 입력" },
        { id: "n3", parentId: "n1", title: "비판 시 '대안 입력 필수' 코멘트", author: "김서연", type: "idea", x: 78, y: 24, votes: 4, adopted: true, reason: "의견은 많은데 대안 없이 태클만 거는 현상 원천 차단", alt: "대안 칸 미입력 시 등록 버튼 비활성화" },
        { id: "n4", parentId: "n1", title: "AI 실시간 음성 회의록 & 역할 분배", author: "박도윤", type: "idea", x: 22, y: 78, votes: 4, adopted: true, reason: "대면 회의 때 녹음만 켜두면 할 일과 난이도 자동 배정", alt: "Web Speech API로 무료 실시간 한국어 음성 인식 구현" },
        { id: "n5", parentId: "n1", title: "단계별 확정 잠금 & 교수님 리포트", author: "최지우", type: "alt", x: 78, y: 78, votes: 5, adopted: true, reason: "제출 직전에 와서 판 뒤엎는 팀원 차단 + 무임승차 PDF 증명", alt: "기여도 점수 자동 산출 및 인쇄 전용 레이아웃 제공" }
      ]
    },
    meeting: {
      isRecording: false,
      durationSec: 0,
      transcript: [
        { speaker: "이준행 (조장)", time: "14:02", text: "다들 모였으니 역할이랑 중간 마감일부터 정할게요. 이번 과제는 자료조사, 마인드맵 정리, PPT 제작, 발표 대본이 필요합니다." },
        { speaker: "김서연", time: "14:03", text: "저는 메인 PPT 디자인이랑 시각 자료 인포그래픽 맡을게요. 대신 자료조사하시는 분들이 출처 링크를 꼭 같이 올려주셔야 해요." },
        { speaker: "박도윤", time: "14:04", text: "네! 제가 대학생 팀플 불편한 점 설문 통계랑 RISS 선행 논문 자료를 내일 저녁 6시 중간 마감 전까지 아카이브에 올리겠습니다." },
        { speaker: "최지우", time: "14:05", text: "그럼 저는 취합된 자료 보고 10분 발표 대본이랑 교수님 예상 질문 Q&A 리스트를 금요일까지 작성할게요." },
        { speaker: "이준행 (조장)", time: "14:06", text: "좋습니다. 민호님은 기존 카톡이랑 노션 단점 비교표를 내일까지 꼭 올려주시고, 제가 전체 웹 프로토타입이랑 최종 취합을 맡겠습니다." }
      ],
      aiSummary: {
        generated: true,
        decisions: [
          "50% 중간 체크포인트 마감을 도입하여 내일 18:00까지 1차 자료 및 비교표 업로드 확정",
          "모든 조사 자료는 PPT 제작 지연을 막기 위해 원문 출처 URL과 3줄 요약을 필수로 기입",
          "제출 직전 번복 방지를 위해 오늘 회의 직후 '1·2단계(주제 및 역할)'를 확정 잠금(Lock) 처리"
        ],
        extractedTasks: [
          { title: "[AI 추출] 메인 PPT 슬라이드 및 인포그래픽 디자인", assignee: "김서연", points: 30 },
          { title: "[AI 추출] 팀플 실태 통계 및 학술 논문 아카이빙", assignee: "박도윤", points: 25 },
          { title: "[AI 추출] 10분 발표 대본 및 예상 질문 Q&A 시나리오", assignee: "최지우", points: 25 },
          { title: "[AI 추출] 카톡·노션 한계점 비교 분석표 제출", assignee: "정민호", points: 20 }
        ]
      }
    }
  };

  let state = loadState();
  let activeModal = null; // null | 'room' | 'newResource' | 'newNode'
  let resourceFilter = "전체";
  let resourceSearch = "";
  let toastMessage = null;
  let toastTimer = null;
  let recognition = null;
  let recordingInterval = null;
  let draggingNodeId = null;

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return Object.assign({}, defaultState, parsed);
      }
    } catch (e) {
      console.warn("Failed to load state:", e);
    }
    return JSON.parse(JSON.stringify(defaultState));
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Failed to save state:", e);
    }
  }

  function showToast(msg) {
    toastMessage = msg;
    if (toastTimer) clearTimeout(toastTimer);
    renderToastOnly();
    toastTimer = setTimeout(() => {
      toastMessage = null;
      renderToastOnly();
    }, 3200);
  }

  function renderToastOnly() {
    let existing = document.getElementById("apple-toast-container");
    if (!existing) {
      existing = document.createElement("div");
      existing.id = "apple-toast-container";
      document.body.appendChild(existing);
    }
    if (!toastMessage) {
      existing.innerHTML = "";
      return;
    }
    existing.innerHTML = `
      <div class="apple-toast">
        <span style="color:#28cd41;">●</span>
        <span>${escapeHtml(toastMessage)}</span>
      </div>
    `;
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Workload Calculation Helper
  function getWorkloadStats() {
    const totalPoints = state.tasks.reduce((sum, t) => sum + Number(t.points || 0), 0) || 1;
    const byMember = state.members.map((m) => {
      const memberTasks = state.tasks.filter((t) => t.assignee === m.name);
      const pts = memberTasks.reduce((sum, t) => sum + Number(t.points || 0), 0);
      const ratio = Math.round((pts / totalPoints) * 100);
      return {
        ...m,
        points: pts,
        ratio,
        taskCount: memberTasks.length
      };
    });
    const maxMember = [...byMember].sort((a, b) => b.ratio - a.ratio)[0];
    const minMember = [...byMember].sort((a, b) => a.ratio - b.ratio)[0];
    const isImbalanced = maxMember && maxMember.ratio >= 35;
    return { totalPoints, byMember, maxMember, minMember, isImbalanced };
  }

  // Contribution Score Helper (0 ~ 100)
  function getContributionScores() {
    const workload = getWorkloadStats();
    return workload.byMember.map((m) => {
      const completedTasks = state.tasks.filter((t) => t.assignee === m.name && t.status === "done").length;
      const overdueTasks = state.tasks.filter((t) => t.assignee === m.name && t.status === "overdue").length;
      const rawScore =
        Math.min(35, m.points * 0.7) +
        Math.min(25, m.filesCount * 7) +
        Math.min(20, m.altComments * 5) +
        (m.checkpointDone ? 15 : 0) +
        (m.attendance * 0.1) -
        overdueTasks * 12;
      const score = Math.max(8, Math.min(100, Math.round(rawScore)));
      let grade = "A+ (핵심 기여)";
      let badgeColor = "#28cd41";
      if (score < 40) {
        grade = "D / F (무임승차 주의 🚨)";
        badgeColor = "#ff3b30";
      } else if (score < 70) {
        grade = "B0 (보통 참여)";
        badgeColor = "#ff9500";
      } else if (score < 88) {
        grade = "A0 (우수 참여)";
        badgeColor = "#0066cc";
      }
      return {
        ...m,
        completedTasks,
        overdueTasks,
        score,
        grade,
        badgeColor
      };
    });
  }

  function render() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const app = document.getElementById("app");
    if (!app) return;

    const workload = getWorkloadStats();
    const contributions = getContributionScores();
    const offlineCount = state.members.filter((m) => m.status === "offline").length;

    app.innerHTML = `
      <!-- 1. Apple Global Nav -->
      <nav class="global-nav">
        <div class="global-nav-inner">
          <a class="nav-brand" onclick="window.teamApp.setTab('all')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zm0 2.5l-10-5v10l10 5 10-5V7l-10 5z"/>
            </svg>
            <span>팀플 스토어</span>
          </a>

          <ul class="nav-links">
            <li><button class="${state.activeTab === "all" ? "active" : ""}" onclick="window.teamApp.setTab('all')">스토어 홈</button></li>
            <li><button class="${state.activeTab === "roles" ? "active" : ""}" onclick="window.teamApp.setTab('roles')">공정 역할·밸런스</button></li>
            <li><button class="${state.activeTab === "archive" ? "active" : ""}" onclick="window.teamApp.setTab('archive')">자료 아카이브</button></li>
            <li><button class="${state.activeTab === "mindmap" ? "active" : ""}" onclick="window.teamApp.setTab('mindmap')">의견 마인드맵</button></li>
            <li><button class="${state.activeTab === "meeting" ? "active" : ""}" onclick="window.teamApp.setTab('meeting')">AI 회의·녹음</button></li>
            <li><button class="${state.activeTab === "report" ? "active" : ""}" onclick="window.teamApp.setTab('report')">기여도 증명서</button></li>
          </ul>

          <div class="nav-actions">
            <select class="nav-icon-btn" onchange="window.teamApp.switchUser(this.value)" title="현재 접속 팀원 전환 (시연용)">
              ${state.members
                .map(
                  (m) =>
                    `<option value="${escapeHtml(m.name)}" ${state.currentUser === m.name ? "selected" : ""}>👤 ${escapeHtml(m.name)}</option>`
                )
                .join("")}
            </select>
            <button class="nav-icon-btn" onclick="window.teamApp.copyInviteLink()">
              🔗 방 링크 복사
            </button>
            <button class="nav-icon-btn" onclick="window.teamApp.openModal('room')">
              🔑 방 설정·입장
            </button>
            <button class="nav-icon-btn" onclick="window.teamApp.toggleTheme()">
              ${state.theme === "light" ? "🌙 다크" : "☀️ 라이트"}
            </button>
          </div>
        </div>
      </nav>

      <!-- 2. Apple Store Notification Ribbon -->
      <div class="store-ribbon">
        <div class="store-ribbon-inner">
          <span class="ribbon-badge">● 실시간 동기화 중</span>
          <span>
            현재 <strong>[${escapeHtml(state.room.course)} · ${escapeHtml(state.room.teamName)}]</strong> 방(코드: <strong class="tabular-nums">${escapeHtml(state.room.code)}</strong> / 비번: <strong class="tabular-nums">${escapeHtml(state.room.pin)}</strong>)에 접속되어 있습니다.
          </span>
          <button class="apple-link" onclick="window.teamApp.copyInviteLink()">
            조원 초대 링크 복사하기 &gt;
          </button>
        </div>
      </div>

      <!-- 3. Main Store Container -->
      <main class="store-container">
        <!-- Store Hero Split Header (Exact Apple Store Proportions) -->
        <header class="store-hero">
          <div class="store-hero-left">
            <h1 class="store-hero-title">
              팀플 스토어. <span class="sub-tone">조별과제의 7가지 재앙을 끝내는 가장 완벽한 방법.</span>
            </h1>
            <div class="store-hero-room-pill">
              <span>🎓 ${escapeHtml(state.room.course)}</span>
              <span>·</span>
              <span>목표: ${escapeHtml(state.room.goal)}</span>
            </div>
          </div>
          <div class="store-hero-right">
            <div class="store-hero-tagline">
              조장이 방 파서 링크·비번만 주면 끝.<br />
              자료 정리부터 AI 녹음·역할 분배까지.
            </div>
            <div class="store-hero-links">
              <button class="apple-link" onclick="window.teamApp.openModal('room')">
                조장으로 새 팀플 방 만들기 / 비번 입장 테스트 ↗
              </button>
              <button class="apple-link" onclick="window.teamApp.setTab('report')">
                교수님 제출용 무임승차·기여도 리포트 바로가기 ↗
              </button>
            </div>
          </div>
        </header>

        <!-- Apple Product Category Dock -->
        <section class="category-dock" aria-label="팀플 핵심 기능 독">
          ${renderDockItem("all", "한눈에 보기", "#1d1d1f", "#3a3a3c", "ALL", `
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.7">
              <rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>
            </svg>
          `)}
          ${renderDockItem("roles", "공정 역할·밸런스", "#0066cc", "#004080", workload.isImbalanced ? "일몰림!" : "균형", `
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.7">
              <path d="M12 3v18M5 8l7-3 7 3M5 8l-3 6h6l-3-6zm14 0l-3 6h6l-3-6z"/>
            </svg>
          `)}
          ${renderDockItem("archive", "자료 아카이브", "#f56300", "#c44d00", `${state.resources.length}건`, `
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.7">
              <path d="M4 4h6l2 2h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>
            </svg>
          `)}
          ${renderDockItem("mindmap", "의견 마인드맵", "#5e5ce6", "#3634a3", `${state.mindmap.nodes.length}노드`, `
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.7">
              <circle cx="12" cy="12" r="3"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/>
              <path d="M9.5 10L6.5 7.5M14.5 10l3-2.5M9.5 14l-3 2.5M14.5 14l3 2.5"/>
            </svg>
          `)}
          ${renderDockItem("meeting", "AI 회의·녹음", "#ff2d55", "#b81d3a", "STT", `
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.7">
              <rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0014 0M12 17v5M8 22h8"/>
            </svg>
          `)}
          ${renderDockItem("report", "기여도 증명서", "#28cd41", "#158f28", "PDF", `
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.7">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 15l2 2 4-4"/>
            </svg>
          `)}
        </section>

        ${state.activeTab === "all" ? renderStoreShelf(workload, offlineCount) : ""}
        ${renderStageLockBanner()}
        ${state.activeTab === "all" || state.activeTab === "roles" ? renderRolesAndSurvivalSection(workload) : ""}
        ${state.activeTab === "all" || state.activeTab === "archive" ? renderResourceArchiveSection() : ""}
        ${state.activeTab === "all" || state.activeTab === "mindmap" ? renderMindmapSection() : ""}
        ${state.activeTab === "all" || state.activeTab === "meeting" ? renderMeetingStudioSection() : ""}
        ${state.activeTab === "all" || state.activeTab === "report" ? renderContributionReportSection(contributions) : ""}
      </main>

      ${renderModal()}
    `;

    renderToastOnly();
    bindMindmapDragEvents();
  }

  function renderDockItem(tabId, label, color1, color2, badgeText, svgContent) {
    const isActive = state.activeTab === tabId;
    return `
      <button class="dock-item ${isActive ? "active" : ""}" onclick="window.teamApp.setTab('${tabId}')">
        <div class="dock-icon-stage" style="background: linear-gradient(145deg, ${color1}, ${color2});">
          ${badgeText ? `<span class="dock-badge tabular-nums">${escapeHtml(badgeText)}</span>` : ""}
          ${svgContent}
        </div>
        <span class="dock-label">${escapeHtml(label)}</span>
      </button>
    `;
  }

  // Signature Apple Store Shelf (Alternating Black & White Cards)
  function renderStoreShelf(workload, offlineCount) {
    return `
      <section class="section-block">
        <div class="section-header-row">
          <h2 class="two-tone-heading">
            7대 팀플 문제 해결. <span>지금 바로 우리 조에서 실행하세요.</span>
          </h2>
        </div>

        <div class="shelf-grid">
          <!-- Card 1: Dark Card (Role & Imbalance Solver) -->
          <article class="shelf-card dark-card" onclick="window.teamApp.setTab('roles')">
            <div>
              <div class="shelf-status-tag">문제 1·2 해결 · 일 몰림 실시간 감지</div>
              <h3 class="shelf-card-title">공정 역할 밸런서 Pro</h3>
              <p class="shelf-card-desc">
                누구 한 명에게만 일이 몰리지 않도록 작업별 난이도 가중치(pt)를 계산해 1초 만에 균형을 맞춥니다.
              </p>
              <div class="shelf-card-metric">
                ${
                  workload.isImbalanced
                    ? `⚠️ 최대 편중 ${workload.maxMember.name} (${workload.maxMember.ratio}%) · 재배치 권장`
                    : `🟢 전원 업무 균형 상태 (최대 ${workload.maxMember.ratio}%)`
                }
              </div>
            </div>

            <div class="shelf-visual-box" onclick="event.stopPropagation()">
              <div style="font-size:12px; font-weight:700; color:#a1a1a6; display:flex; justify-content:space-between;">
                <span>팀원별 업무 부하율</span>
                <span class="tabular-nums">총 ${workload.totalPoints}pt</span>
              </div>
              ${workload.byMember
                .slice(0, 4)
                .map(
                  (m) => `
                <div style="display:flex; align-items:center; gap:8px; font-size:12px;">
                  <span style="width:46px; font-weight:600;">${escapeHtml(m.name)}</span>
                  <div style="flex:1; height:7px; background:rgba(255,255,255,0.14); border-radius:99px; overflow:hidden;">
                    <div style="width:${m.ratio}%; height:100%; background:${m.ratio >= 35 ? "#ff3b30" : "#28cd41"}; border-radius:99px;"></div>
                  </div>
                  <span class="tabular-nums" style="width:34px; text-align:right; font-weight:700;">${m.ratio}%</span>
                </div>
              `
                )
                .join("")}
              <button class="btn-primary" style="width:100%; margin-top:6px; padding:8px 12px; font-size:12px;" onclick="window.teamApp.autoBalanceTasks()">
                ⚖️ 원클릭 업무 균형 맞추기
              </button>
            </div>
          </article>

          <!-- Card 2: Light Card (Idea Map + Mandatory Alternative) -->
          <article class="shelf-card light-card" onclick="window.teamApp.setTab('mindmap')">
            <div>
              <div class="shelf-status-tag">문제 4·6 해결 · 비판 시 대안 필수</div>
              <h3 class="shelf-card-title">의견 마인드맵 Duo</h3>
              <p class="shelf-card-desc">
                "그건 좀 별로인데..."만 하고 대안 없는 태클은 등록 불가. 마인드맵 가지와 투표로 충돌을 끝냅니다.
              </p>
              <div class="shelf-card-metric">
                현재 ${state.mindmap.nodes.length}개 의견 노드 · 대안 제시율 100%
              </div>
            </div>

            <div class="shelf-visual-box">
              <div style="display:flex; flex-direction:column; gap:8px;">
                <div style="padding:9px 12px; border-radius:12px; background:#0066cc; color:#fff; font-size:12px; font-weight:700; text-align:center;">
                  🎯 ${escapeHtml(state.mindmap.nodes[0]?.title || "중심 주제")}
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                  ${state.mindmap.nodes
                    .slice(1, 5)
                    .map(
                      (n) => `
                    <div style="padding:8px 10px; border-radius:10px; background:var(--bg-elevated); font-size:11.5px; font-weight:600; box-shadow:0 2px 6px rgba(0,0,0,0.05);">
                      <div style="color:#0066cc; font-size:10.5px;">👍 ${n.votes}표 · ${escapeHtml(n.author)}</div>
                      <div style="margin-top:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(n.title)}</div>
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </div>
            </div>
          </article>

          <!-- Card 3: Dark Card (AI Voice Meeting Recorder & Auto Role Extractor) -->
          <article class="shelf-card dark-card" onclick="window.teamApp.setTab('meeting')">
            <div>
              <div class="shelf-status-tag">오프라인·온라인 통합 · 실시간 STT</div>
              <h3 class="shelf-card-title">AI 보이스 회의록<br/>PROLED Studio</h3>
              <p class="shelf-card-desc">
                만나서 녹음만 켜두세요. 실시간 한국어 음성 인식으로 회의를 받아적고 할 일과 역할을 자동 분배합니다.
              </p>
              <div class="shelf-card-metric">
                대화 기록 ${state.meeting.transcript.length}건 · 추출된 역할 ${state.meeting.aiSummary.extractedTasks.length}건
              </div>
            </div>

            <div class="shelf-visual-box" onclick="event.stopPropagation()">
              <div class="waveform-bars ${state.meeting.isRecording ? "recording-active" : ""}">
                <span class="wave-bar" style="height:18px;"></span>
                <span class="wave-bar" style="height:34px;"></span>
                <span class="wave-bar" style="height:24px;"></span>
                <span class="wave-bar" style="height:42px;"></span>
                <span class="wave-bar" style="height:16px;"></span>
                <span class="wave-bar" style="height:30px;"></span>
                <span class="wave-bar" style="height:22px;"></span>
              </div>
              <div style="font-size:12px; color:#a1a1a6; text-align:center;">
                ${state.meeting.isRecording ? "🔴 실시간 마이크 음성 인식 중..." : "마이크 녹음 및 AI 역할 자동 추출 준비 완료"}
              </div>
              <button class="btn-primary" style="width:100%; background:#f56300; padding:8px 12px; font-size:12px;" onclick="window.teamApp.setTab('meeting')">
                🎙️ AI 회의실 열기
              </button>
            </div>
          </article>

          <!-- Card 4: Dark Card (Survival Signal, Checkpoints & Professor Report) -->
          <article class="shelf-card dark-card" onclick="window.teamApp.setTab('report')">
            <div>
              <div class="shelf-status-tag">문제 3·5·7 해결 · 잠수·무임승차 박제</div>
              <h3 class="shelf-card-title">중간 마감 & 기여도<br/>XDR 증명서</h3>
              <p class="shelf-card-desc">
                연락 두절 시간, 마감 직전 폭탄 던지기, 제출 직전 판 뒤엎기까지 차단하고 교수님 제출용 PDF를 출력합니다.
              </p>
              <div class="shelf-card-metric">
                ${offlineCount > 0 ? `🚨 미접속 잠수 주의 ${offlineCount}명 감지됨` : `🟢 전원 정상 접속 중`}
              </div>
            </div>

            <div class="shelf-visual-box">
              <div style="font-size:12px; color:#a1a1a6; font-weight:700;">실시간 생존 신호 및 중간점검</div>
              ${state.members
                .slice(0, 4)
                .map(
                  (m) => `
                <div style="display:flex; align-items:center; justify-content:space-between; font-size:12px;">
                  <span>${m.status === "offline" ? "🔴" : m.status === "online" ? "🟢" : "🟡"} ${escapeHtml(m.name)}</span>
                  <span style="color:${m.status === "offline" ? "#ff453a" : "#a1a1a6"}; font-weight:600;">${escapeHtml(m.lastSeen)}</span>
                </div>
              `
                )
                .join("")}
            </div>
          </article>
        </div>
      </section>
    `;
  }

  // Stage Lock Banner (Solves Problem #7: "제출 직전에 관심을 가짐 / 판 뒤엎기")
  function renderStageLockBanner() {
    return `
      <section class="section-block">
        <div class="stage-lock-banner">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
            <div>
              <h2 class="two-tone-heading" style="font-size:1.35rem;">
                단계별 확정 잠금 (Stage Lock). <span>내내 가만히 있다가 제출 직전에 와서 판 뒤엎는 행위를 차단합니다.</span>
              </h2>
            </div>
            <span class="badge-pill" style="background:rgba(0,102,204,0.12); color:var(--apple-blue);">
              🔒 잠긴 단계는 팀원 과반수 동의 없이 번복 불가
            </span>
          </div>

          <div class="stage-steps-grid">
            ${state.stages
              .map(
                (st) => `
              <div class="stage-step-card ${st.status === "locked" ? "locked" : st.status === "active" ? "active-stage" : ""}">
                <div>
                  <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:6px;">
                    <span style="font-size:13.5px; font-weight:700;">${escapeHtml(st.title)}</span>
                    <span style="font-size:11.5px; font-weight:700; color:${
                      st.status === "locked" ? "var(--apple-blue)" : st.status === "active" ? "#f56300" : "var(--ink-muted)"
                    };">
                      ${st.status === "locked" ? "🔒 확정 잠금" : st.status === "active" ? "🔥 진행 중" : "⏳ 대기"}
                    </span>
                  </div>
                  <p style="font-size:12.5px; color:var(--ink-secondary);">${escapeHtml(st.desc)}</p>
                </div>
                <div style="display:flex; align-items:center; justify-content:space-between; padding-top:8px; border-top:1px solid var(--nav-border); font-size:11.5px;">
                  <span style="color:var(--ink-muted); font-weight:600;">${escapeHtml(st.lockedAt)}</span>
                  <button class="apple-link" style="font-size:11.5px;" onclick="window.teamApp.toggleStageLock(${st.id})">
                    ${st.status === "locked" ? "잠금 해제" : "단계 잠그기 🔒"}
                  </button>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  // Section A: Fair Role Distribution, Imbalance Detector, Survival Signals & 50% Checkpoints
  function renderRolesAndSurvivalSection(workload) {
    return `
      <section class="section-block" id="section-roles">
        <div class="section-header-row">
          <h2 class="two-tone-heading">
            공정 역할 분배 & 생존 현황판. <span>일 몰림, 잠수, 마감 직전 폭탄 던지기를 동시에 해결합니다.</span>
          </h2>
          <div style="display:flex; gap:10px;">
            <button class="btn-primary" onclick="window.teamApp.autoBalanceTasks()">
              ⚖️ AI 공평 역할 자동 재배치
            </button>
          </div>
        </div>

        ${
          workload.isImbalanced
            ? `
          <div class="imbalance-alert">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="font-size:20px;">🚨</span>
              <div>
                <div style="font-weight:700; font-size:14px; color:#ff3b30;">
                  업무 과부하(일 몰림) 감지: 현재 <strong>${escapeHtml(workload.maxMember.name)}</strong>님에게 전체 업무의 <strong class="tabular-nums">${workload.maxMember.ratio}% (${workload.maxMember.points}pt)</strong>가 몰려 있습니다!
                </div>
                <div style="font-size:12.5px; color:var(--ink-secondary);">
                  반면 <strong>${escapeHtml(workload.minMember.name)}</strong>님의 업무 비중은 <strong class="tabular-nums">${workload.minMember.ratio}% (${workload.minMember.points}pt)</strong>입니다. 우측 버튼을 누르면 난이도 가중치에 맞춰 가장 공평하게 재분배합니다.
                </div>
              </div>
            </div>
            <button class="btn-dark" onclick="window.teamApp.autoBalanceTasks()">
              지금 즉시 1/N 균형 맞추기
            </button>
          </div>
        `
            : ""
        }

        <div class="workspace-grid-2">
          <!-- Left: Team Member Survival Signal & Workload Meter -->
          <div class="workspace-panel">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:18px;">
              <h3 style="font-size:1.15rem; font-weight:700;">👥 팀원별 업무량 게이지 & 실시간 생존 신호</h3>
              <span style="font-size:12px; color:var(--ink-secondary);" class="tabular-nums">권장 균형치: 1인당 약 20%</span>
            </div>

            <div class="member-list">
              ${workload.byMember
                .map((m) => {
                  const barColor = m.ratio >= 35 ? "#ff3b30" : m.ratio < 12 ? "#ff9500" : "#28cd41";
                  return `
                  <div class="member-row">
                    <div class="member-top">
                      <div style="display:flex; align-items:center; gap:10px;">
                        <span class="member-avatar" style="background:${m.color};">${escapeHtml(m.name.slice(0, 1))}</span>
                        <div>
                          <div style="font-weight:700; font-size:14px; display:flex; align-items:center; gap:6px;">
                            <span>${escapeHtml(m.name)}</span>
                            <span style="font-size:11.5px; color:var(--ink-secondary); font-weight:500;">(${escapeHtml(m.role)})</span>
                          </div>
                          <div style="font-size:12px; color:${m.status === "offline" ? "#ff3b30" : "var(--ink-secondary)"}; font-weight:${m.status === "offline" ? "700" : "500"};">
                            ${m.status === "online" ? "🟢" : m.status === "recent" ? "🟡" : "🔴"} ${escapeHtml(m.lastSeen)} · 미확인 알림 ${m.unread}건
                          </div>
                        </div>
                      </div>

                      <div style="display:flex; align-items:center; gap:8px;">
                        <span class="badge-pill tabular-nums" style="background:var(--bg-elevated); font-weight:700;">
                          ${m.points}pt (${m.ratio}%)
                        </span>
                        ${
                          m.status === "offline" || !m.checkpointDone
                            ? `<button class="btn-secondary" style="padding:6px 11px; font-size:11.5px; color:#ff3b30;" onclick="window.teamApp.sendSystemNudge('${m.id}')">
                                🔔 시스템 독촉 발송
                              </button>`
                            : `<span class="badge-pill" style="background:rgba(40,205,65,0.14); color:#168829;">✓ 중간점검 완료</span>`
                        }
                      </div>
                    </div>

                    <div class="load-bar-track">
                      <div class="load-bar-fill" style="width:${Math.min(100, m.ratio)}%; background:${barColor};"></div>
                    </div>
                  </div>
                `;
                })
                .join("")}
            </div>
          </div>

          <!-- Right: 50% Checkpoint Tasks & Add Task -->
          <div class="workspace-panel">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; flex-wrap:wrap; gap:8px;">
              <div>
                <h3 style="font-size:1.15rem; font-weight:700;">⏱️ 할 일 & '50% 중간 체크포인트' 강제 보드</h3>
                <p style="font-size:12.5px; color:var(--ink-secondary);">마감 직전에 엉터리로 던지는 것을 막기 위해 모든 과제는 50% 초안 체크포인트를 거칩니다.</p>
              </div>
            </div>

            <!-- Add New Task Form -->
            <form onsubmit="window.teamApp.addTask(event)" style="display:grid; grid-template-columns: 1fr 120px 110px auto; gap:8px; margin-bottom:18px;">
              <input class="apple-input" name="title" placeholder="새 작업 입력 (예: 경쟁 서비스 사례 조사)" required />
              <select class="apple-select" name="assignee">
                ${state.members.map((m) => `<option value="${escapeHtml(m.name)}">${escapeHtml(m.name)}</option>`).join("")}
              </select>
              <select class="apple-select" name="points" title="난이도 가중치">
                <option value="15">난이도 하 (15pt)</option>
                <option value="25" selected>난이도 중 (25pt)</option>
                <option value="40">난이도 상 (40pt)</option>
              </select>
              <button type="submit" class="btn-primary" style="white-space:nowrap;">+ 추가</button>
            </form>

            <div>
              ${state.tasks
                .map(
                  (t) => `
                <div class="task-card">
                  <div style="flex:1;">
                    <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                      <span class="badge-pill tabular-nums" style="background:rgba(0,102,204,0.1); color:var(--apple-blue);">
                        난이도 ${t.points}pt
                      </span>
                      <span style="font-weight:700; font-size:14px; ${t.status === "done" ? "text-decoration:line-through; opacity:0.65;" : ""}">
                        ${escapeHtml(t.title)}
                      </span>
                    </div>
                    <div style="margin-top:6px; font-size:12px; color:var(--ink-secondary); display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                      <span>담당자: <strong>${escapeHtml(t.assignee)}</strong></span>
                      <span>중간점검(50%): <strong style="color:${t.status === "overdue" ? "#ff3b30" : "var(--ink-primary)"};">${escapeHtml(t.checkpoint)}</strong></span>
                      <span>최근 갱신: ${escapeHtml(t.updatedAt)}</span>
                    </div>
                  </div>

                  <div style="display:flex; align-items:center; gap:8px;">
                    <select class="apple-select" style="width:auto; padding:6px 10px; font-size:12px;" onchange="window.teamApp.reassignTask('${t.id}', this.value)">
                      ${state.members
                        .map(
                          (m) =>
                            `<option value="${escapeHtml(m.name)}" ${t.assignee === m.name ? "selected" : ""}>${escapeHtml(m.name)}</option>`
                        )
                        .join("")}
                    </select>
                    <button class="btn-secondary" style="padding:7px 12px; font-size:12px;" onclick="window.teamApp.cycleTaskStatus('${t.id}')">
                      ${t.status === "done" ? "✅ 완료됨" : t.status === "in_progress" ? "🔥 진행중" : t.status === "overdue" ? "🚨 지각/독촉" : "⏳ 대기"}
                    </button>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // Section B: Resource Archive + Mandatory Alternative Inline Comments
  function renderResourceArchiveSection() {
    const categories = ["전체", "논문·학술", "통계·데이터", "PPT·초안", "기사·레퍼런스"];
    const filtered = state.resources.filter((r) => {
      const matchCat = resourceFilter === "전체" || r.category === resourceFilter;
      const q = resourceSearch.trim().toLowerCase();
      const matchSearch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        r.author.toLowerCase().includes(q) ||
        (r.tags || []).some((tg) => tg.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });

    return `
      <section class="section-block" id="section-archive">
        <div class="section-header-row">
          <div>
            <h2 class="two-tone-heading">
              한눈에 찾는 자료 아카이브. <span>출처 누락 없는 카드 정리와 '대안 필수' 코멘트 스레드.</span>
            </h2>
          </div>
          <button class="btn-primary" onclick="window.teamApp.openModal('newResource')">
            + 새 자료 올리기 (출처 필수)
          </button>
        </div>

        <div style="display:flex; align-items:center; justify-content:space-between; gap:14px; flex-wrap:wrap;">
          <div class="filter-pills">
            ${categories
              .map(
                (cat) => `
              <button class="filter-pill ${resourceFilter === cat ? "active" : ""}" onclick="window.teamApp.setResourceFilter('${cat}')">
                ${escapeHtml(cat)}
              </button>
            `
              )
              .join("")}
          </div>
          <div style="min-width:260px; flex:0 1 340px;">
            <input
              class="apple-input"
              placeholder="🔍 제목, 태그, 작성자 즉시 검색..."
              value="${escapeHtml(resourceSearch)}"
              oninput="window.teamApp.setResourceSearch(this.value)"
            />
          </div>
        </div>

        <div class="resource-grid">
          ${filtered
            .map(
              (res) => `
            <article class="resource-card">
              <div>
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:10px;">
                  <span class="badge-pill" style="background:rgba(245,99,0,0.12); color:#f56300;">
                    ${escapeHtml(res.category)}
                  </span>
                  <span style="font-size:12px; color:var(--ink-muted);">
                    👤 <strong>${escapeHtml(res.author)}</strong> · ${escapeHtml(res.createdAt)}
                  </span>
                </div>

                <h3 style="font-size:1.15rem; font-weight:700; line-height:1.35; margin-bottom:8px;">
                  ${escapeHtml(res.title)}
                </h3>
                <p style="font-size:13.5px; color:var(--ink-secondary); line-height:1.5; margin-bottom:12px;">
                  ${escapeHtml(res.summary)}
                </p>

                <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px;">
                  <div style="display:flex; gap:6px; flex-wrap:wrap;">
                    ${(res.tags || [])
                      .map(
                        (tag) =>
                          `<span style="font-size:11.5px; padding:3px 9px; border-radius:99px; background:var(--bg-canvas); color:var(--ink-secondary); font-weight:600;">#${escapeHtml(tag)}</span>`
                      )
                      .join("")}
                  </div>
                  <a class="apple-link" href="${escapeHtml(res.url)}" target="_blank" rel="noopener noreferrer" style="font-size:12.5px;">
                    원본 출처 열기 ↗
                  </a>
                </div>
              </div>

              <!-- Inline Comment Thread with Mandatory Alternative Rule -->
              <div class="comment-thread">
                <div style="font-size:12px; font-weight:700; color:var(--ink-secondary);">
                  💬 자료 피드백 코멘트 (${res.comments.length}건) · <span style="color:#f56300;">반박/수정 요청 시 대안 입력 필수</span>
                </div>

                ${res.comments
                  .map(
                    (c) => `
                  <div class="comment-item">
                    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">
                      <span style="font-weight:700; font-size:12px;">
                        ${c.type === "critique" ? "⚡ [수정·반박 + 대안]" : c.type === "approve" ? "👍 [찬성·보완]" : "💬 [의견]"} ${escapeHtml(c.author)}
                      </span>
                      <span style="font-size:11px; color:var(--ink-muted);">${escapeHtml(c.time)}</span>
                    </div>
                    <div>${escapeHtml(c.text)}</div>
                    ${
                      c.alt
                        ? `<div class="comment-alternative-box">💡 제시된 대안: ${escapeHtml(c.alt)}</div>`
                        : ""
                    }
                  </div>
                `
                  )
                  .join("")}

                <form onsubmit="window.teamApp.addComment(event, '${res.id}')" style="display:flex; flex-direction:column; gap:8px; margin-top:4px;">
                  <div style="display:flex; gap:8px;">
                    <select class="apple-select" name="type" style="width:175px; padding:8px 10px; font-size:12px;" onchange="window.teamApp.toggleAltField(this, '${res.id}')">
                      <option value="approve">👍 찬성·보완 의견</option>
                      <option value="critique">⚡ 반대·수정 (대안필수)</option>
                      <option value="comment">💬 일반 질문·코멘트</option>
                    </select>
                    <input class="apple-input" name="text" placeholder="이 자료에 대한 코멘트를 남겨주세요..." style="padding:8px 12px; font-size:12.5px;" required />
                  </div>
                  <div id="alt-box-${res.id}" style="display:none;">
                    <input
                      class="apple-input"
                      name="alt"
                      placeholder="💡 [필수] 비판만 하는 댓글은 금지됩니다. 구체적인 대안을 함께 적어주세요!"
                      style="border-color:#f56300; background:rgba(245,99,0,0.06); font-size:12.5px;"
                    />
                  </div>
                  <button type="submit" class="btn-secondary" style="align-self:flex-end; padding:6px 14px; font-size:12px;">
                    코멘트 등록
                  </button>
                </form>
              </div>
            </article>
          `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  // Section C: Interactive Mind Map ('의견맵')
  function renderMindmapSection() {
    const nodes = state.mindmap.nodes;
    const selected = nodes.find((n) => n.id === state.mindmap.selectedNodeId) || nodes[0];

    const svgLines = nodes
      .filter((n) => n.parentId)
      .map((n) => {
        const parent = nodes.find((p) => p.id === n.parentId) || nodes[0];
        const x1 = parent.x;
        const y1 = parent.y;
        const x2 = n.x;
        const y2 = n.y;
        const midX = (x1 + x2) / 2;
        return `
          <path
            d="M ${x1}% ${y1}% C ${midX}% ${y1}%, ${midX}% ${y2}%, ${x2}% ${y2}%"
            stroke="${n.adopted ? "#28cd41" : "#0066cc"}"
            stroke-width="2.5"
            stroke-dasharray="${n.type === "alt" ? "5,4" : "none"}"
            fill="none"
            opacity="0.78"
          />
        `;
      })
      .join("");

    return `
      <section class="section-block" id="section-mindmap">
        <div class="section-header-row">
          <div>
            <h2 class="two-tone-heading">
              인터랙티브 의견 마인드맵. <span>노드를 드래그해 정리하고, 대안 제시와 투표로 의견 충돌을 종결하세요.</span>
            </h2>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="btn-secondary" onclick="window.teamApp.resetMindmapLayout()">
              🔄 마인드맵 자동 정렬
            </button>
            <button class="btn-primary" onclick="window.teamApp.openModal('newNode')">
              + 새 의견 / 대안 가지 추가
            </button>
          </div>
        </div>

        <div class="workspace-grid-2">
          <!-- Left: Interactive Mindmap Canvas -->
          <div class="mindmap-stage" id="mindmap-canvas">
            <svg class="mindmap-svg" preserveAspectRatio="none">
              ${svgLines}
            </svg>

            <div style="position:absolute; top:16px; left:20px; z-index:5; color:#a1a1a6; font-size:12px; pointer-events:none;">
              💡 노드를 마우스로 드래그해 위치를 옮기거나 클릭해 투표·대안을 확인하세요
            </div>

            ${nodes
              .map(
                (n) => `
              <div
                class="mindmap-node ${n.type === "root" ? "root-node" : ""} ${
                  selected && selected.id === n.id ? "selected-node" : ""
                } ${n.adopted ? "adopted-node" : ""}"
                style="left:${n.x}%; top:${n.y}%;"
                data-node-id="${n.id}"
                onclick="window.teamApp.selectMindmapNode('${n.id}')"
              >
                <div style="display:flex; align-items:center; justify-content:space-between; gap:6px; font-size:11px; opacity:0.85; margin-bottom:4px;">
                  <span>${n.type === "root" ? "🎯 중심 주제" : n.type === "alt" ? "💡 대안 노드" : "🌿 아이디어"} · ${escapeHtml(n.author)}</span>
                  <span class="tabular-nums" style="font-weight:700; color:#ffd60a;">👍 ${n.votes}</span>
                </div>
                <div style="font-weight:700; font-size:13.5px; line-height:1.3;">
                  ${escapeHtml(n.title)}
                </div>
                ${
                  n.adopted
                    ? `<div style="margin-top:6px; font-size:10.5px; color:#28cd41; font-weight:700;">✅ 팀 채택 완료</div>`
                    : ""
                }
              </div>
            `
              )
              .join("")}
          </div>

          <!-- Right: Selected Node Inspector & Voting / Alternative Panel -->
          <div class="workspace-panel" style="display:flex; flex-direction:column; justify-content:space-between; gap:18px;">
            ${
              selected
                ? `
              <div>
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
                  <span class="badge-pill" style="background:rgba(0,102,204,0.12); color:var(--apple-blue);">
                    선택된 마인드맵 노드 상세
                  </span>
                  <span style="font-size:12.5px; color:var(--ink-secondary);">제안자: <strong>${escapeHtml(selected.author)}</strong></span>
                </div>

                <h3 style="font-size:1.35rem; font-weight:700; margin-bottom:10px;">
                  ${escapeHtml(selected.title)}
                </h3>

                <div style="padding:14px 16px; border-radius:16px; background:var(--bg-canvas); margin-bottom:12px;">
                  <div style="font-size:12px; font-weight:700; color:var(--ink-secondary); margin-bottom:4px;">📌 제안 근거 및 배경</div>
                  <div style="font-size:13.5px;">${escapeHtml(selected.reason || "근거 설명 없음")}</div>
                </div>

                ${
                  selected.alt
                    ? `
                  <div style="padding:14px 16px; border-radius:16px; background:rgba(245,99,0,0.09); border:1px solid rgba(245,99,0,0.28); margin-bottom:14px;">
                    <div style="font-size:12px; font-weight:700; color:#f56300; margin-bottom:4px;">💡 함께 제시된 구체적 실행 대안</div>
                    <div style="font-size:13.5px; font-weight:600;">${escapeHtml(selected.alt)}</div>
                  </div>
                `
                    : ""
                }

                <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-top:16px;">
                  <button class="btn-primary" onclick="window.teamApp.voteMindmapNode('${selected.id}')">
                    👍 이 의견에 찬성 투표 (${selected.votes}표)
                  </button>
                  <button class="btn-secondary" onclick="window.teamApp.toggleAdoptNode('${selected.id}')">
                    ${selected.adopted ? "채택 해제" : "✅ 최종 채택안으로 확정"}
                  </button>
                </div>
              </div>

              <div style="border-top:1px solid var(--nav-border); padding-top:16px;">
                <h4 style="font-size:13.5px; font-weight:700; margin-bottom:8px;">
                  ⚡ 이 노드에 새로운 하위 가지 또는 반박 대안 달기
                </h4>
                <form onsubmit="window.teamApp.addChildNodeInline(event, '${selected.id}')" style="display:flex; flex-direction:column; gap:8px;">
                  <input class="apple-input" name="title" placeholder="새 가지 제목 (예: 모바일 알림 연동 방식)" required />
                  <input class="apple-input" name="reason" placeholder="제안 이유 (예: 카톡 알림 피로도를 줄이기 위해)" required />
                  <input class="apple-input" name="alt" placeholder="💡 구체적 대안/실행 방안 (필수 입력)" required />
                  <button type="submit" class="btn-dark" style="align-self:flex-start;">
                    🌿 현재 노드에 가지 연결하기
                  </button>
                </form>
              </div>
            `
                : ""
            }
          </div>
        </div>
      </section>
    `;
  }

  // Section D: AI Voice Meeting Studio (Web Speech API STT + Auto Summary & Role Distribution)
  function renderMeetingStudioSection() {
    return `
      <section class="section-block" id="section-meeting">
        <div class="section-header-row">
          <div>
            <h2 class="two-tone-heading">
              AI 보이스 회의실 & 역할 분배기. <span>만나서 녹음만 켜두면 대화 기록부터 할 일 배정까지 자동으로 끝납니다.</span>
            </h2>
          </div>
        </div>

        <div class="workspace-grid-2">
          <!-- Left: Live Voice Recording & Transcript -->
          <div class="voice-studio-card">
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; margin-bottom:18px;">
              <div>
                <div style="color:#f56300; font-size:12px; font-weight:700;">WEB SPEECH API · 한국어 실시간 음성 인식</div>
                <h3 style="font-size:1.4rem; font-weight:700; margin-top:2px;">실시간 회의 녹음 스튜디오</h3>
              </div>
              <div style="display:flex; gap:8px; flex-wrap:wrap;">
                <button
                  class="btn-primary"
                  style="background:${state.meeting.isRecording ? "#ff3b30" : "#f56300"};"
                  onclick="window.teamApp.toggleVoiceRecording()"
                >
                  ${state.meeting.isRecording ? "⏹️ 녹음 중지" : "🎙️ 실시간 마이크 녹음 시작"}
                </button>
                <button class="btn-secondary" style="background:rgba(255,255,255,0.14); color:#fff;" onclick="window.teamApp.loadDemoMeeting()">
                  🎬 시연용 회의 대화 불러오기
                </button>
              </div>
            </div>

            <div style="padding:14px 18px; border-radius:16px; background:rgba(255,255,255,0.07); margin-bottom:16px; display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:12px;">
                <div class="waveform-bars ${state.meeting.isRecording ? "recording-active" : ""}" style="height:28px;">
                  <span class="wave-bar" style="height:14px;"></span>
                  <span class="wave-bar" style="height:26px;"></span>
                  <span class="wave-bar" style="height:18px;"></span>
                  <span class="wave-bar" style="height:28px;"></span>
                  <span class="wave-bar" style="height:12px;"></span>
                </div>
                <span style="font-size:13px; color:#d1d1d6;">
                  ${
                    state.meeting.isRecording
                      ? "🔴 마이크로 말씀하시면 한국어 문장으로 실시간 변환됩니다..."
                      : "대면 회의 시 마이크 버튼을 누르거나 아래 입력창으로 발언을 추가하세요."
                  }
                </span>
              </div>
            </div>

            <div style="max-height:280px; overflow-y:auto; display:flex; flex-direction:column; gap:10px; padding-right:4px; margin-bottom:16px;">
              ${state.meeting.transcript
                .map(
                  (line) => `
                <div style="padding:11px 14px; border-radius:14px; background:rgba(255,255,255,0.08); font-size:13px;">
                  <div style="display:flex; justify-content:space-between; color:#f56300; font-size:11.5px; font-weight:700; margin-bottom:3px;">
                    <span>🗣️ ${escapeHtml(line.speaker)}</span>
                    <span class="tabular-nums">${escapeHtml(line.time)}</span>
                  </div>
                  <div style="color:#f5f5f7; line-height:1.45;">${escapeHtml(line.text)}</div>
                </div>
              `
                )
                .join("")}
            </div>

            <form onsubmit="window.teamApp.addTranscriptLine(event)" style="display:flex; gap:8px;">
              <input
                class="apple-input"
                name="text"
                placeholder="회의 발언 직접 입력 (예: 김서연님이 금요일까지 PPT 초안 맡기로 함)"
                style="background:rgba(255,255,255,0.1); color:#fff; border-color:rgba(255,255,255,0.2);"
                required
              />
              <button type="submit" class="btn-primary" style="white-space:nowrap;">발언 추가</button>
            </form>
          </div>

          <!-- Right: AI Auto Summary & One-Click Role Assignment -->
          <div class="workspace-panel" style="display:flex; flex-direction:column; justify-content:space-between; gap:16px;">
            <div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; margin-bottom:14px; flex-wrap:wrap;">
                <h3 style="font-size:1.2rem; font-weight:700;">✨ AI 회의 핵심 요약 & 역할 자동 추출</h3>
                <button class="btn-primary" onclick="window.teamApp.runAiMeetingAnalyzer()">
                  🤖 대화 내용 재분석 및 역할 추출
                </button>
              </div>

              <div style="padding:16px; border-radius:18px; background:var(--bg-canvas); margin-bottom:16px;">
                <div style="font-size:12.5px; font-weight:700; color:var(--apple-blue); margin-bottom:8px;">
                  📋 AI가 정리한 오늘 회의 핵심 합의 사항
                </div>
                <ul style="padding-left:18px; font-size:13.5px; display:flex; flex-direction:column; gap:6px;">
                  ${state.meeting.aiSummary.decisions
                    .map((d) => `<li>${escapeHtml(d)}</li>`)
                    .join("")}
                </ul>
              </div>

              <div>
                <div style="font-size:13px; font-weight:700; margin-bottom:10px; display:flex; justify-content:space-between;">
                  <span>🎯 회의록에서 감지된 팀원별 할 일 (Action Items)</span>
                  <span style="color:var(--ink-secondary); font-size:12px;">난이도 포인트 자동 산정됨</span>
                </div>
                ${state.meeting.aiSummary.extractedTasks
                  .map(
                    (et) => `
                  <div style="padding:12px 14px; border-radius:14px; background:var(--bg-canvas); margin-bottom:8px; display:flex; align-items:center; justify-content:space-between; gap:10px;">
                    <div>
                      <div style="font-weight:700; font-size:13.5px;">${escapeHtml(et.title)}</div>
                      <div style="font-size:12px; color:var(--ink-secondary);">추천 담당자: <strong>${escapeHtml(et.assignee)}</strong></div>
                    </div>
                    <span class="badge-pill tabular-nums" style="background:rgba(0,102,204,0.12); color:var(--apple-blue);">
                      +${et.points}pt
                    </span>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>

            <button class="btn-dark" style="width:100%; justify-content:center; padding:13px;" onclick="window.teamApp.applyExtractedTasksToBoard()">
              📌 추출된 역할을 '공정 역할 분배 보드'에 즉시 반영하기
            </button>
          </div>
        </div>
      </section>
    `;
  }

  // Section E: Professor Peer-Review & Objective Contribution Certificate
  function renderContributionReportSection(contributions) {
    return `
      <section class="section-block" id="section-report">
        <div class="section-header-row">
          <div>
            <h2 class="two-tone-heading">
              교수님 제출용 기여도 증명서. <span>객관적 활동 로그로 무임승차 논란을 깔끔하게 종결합니다.</span>
            </h2>
          </div>
          <div style="display:flex; gap:10px;" class="no-print">
            <button class="btn-secondary" onclick="window.teamApp.copyReportSummary()">
              📋 교수님 메일용 요약 복사
            </button>
            <button class="btn-primary" onclick="window.print()">
              🖨️ 공식 기여도 증명서 PDF 저장 / 인쇄
            </button>
          </div>
        </div>

        <div class="workspace-panel">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; padding-bottom:18px; border-bottom:1px solid var(--nav-border); margin-bottom:20px;">
            <div>
              <div style="font-size:12px; font-weight:700; color:var(--apple-blue);">OFFICIAL TEAM CONTRIBUTION AUDIT REPORT</div>
              <h3 style="font-size:1.35rem; font-weight:700; margin-top:2px;">
                ${escapeHtml(state.room.course)} — ${escapeHtml(state.room.teamName)} 객관적 기여도 평가서
              </h3>
            </div>
            <div style="text-align:right; font-size:12.5px; color:var(--ink-secondary);" class="tabular-nums">
              <div>방 고유코드: <strong>${escapeHtml(state.room.code)}</strong></div>
              <div>산출 기준일: 2026년 11월 06일 실시간 로그 기반</div>
            </div>
          </div>

          <div style="overflow-x:auto;">
            <table style="width:100%; border-collapse:collapse; font-size:13.5px;">
              <thead>
                <tr style="border-bottom:2px solid var(--nav-border); text-align:left; color:var(--ink-secondary); font-size:12px;">
                  <th style="padding:12px 10px;">팀원 (학번)</th>
                  <th style="padding:12px 10px;">담당 역할</th>
                  <th style="padding:12px 10px;">할당 업무량</th>
                  <th style="padding:12px 10px;">자료 업로드</th>
                  <th style="padding:12px 10px;">대안 제시·피드백</th>
                  <th style="padding:12px 10px;">중간마감 준수</th>
                  <th style="padding:12px 10px;">종합 기여도 점수</th>
                  <th style="padding:12px 10px;">시스템 판정</th>
                </tr>
              </thead>
              <tbody>
                ${contributions
                  .map(
                    (c) => `
                  <tr style="border-bottom:1px solid var(--nav-border);">
                    <td style="padding:14px 10px; font-weight:700;">
                      ${escapeHtml(c.name)} <span style="font-weight:400; color:var(--ink-muted);" class="tabular-nums">(${escapeHtml(c.studentId)})</span>
                    </td>
                    <td style="padding:14px 10px; color:var(--ink-secondary);">${escapeHtml(c.role)}</td>
                    <td style="padding:14px 10px;" class="tabular-nums"><strong>${c.points}pt</strong> (${c.ratio}%)</td>
                    <td style="padding:14px 10px;" class="tabular-nums">${c.filesCount}건</td>
                    <td style="padding:14px 10px;" class="tabular-nums">${c.altComments}회</td>
                    <td style="padding:14px 10px;">
                      ${
                        c.checkpointDone
                          ? `<span style="color:#168829; font-weight:700;">✓ 정시 제출</span>`
                          : `<span style="color:#ff3b30; font-weight:700;">✗ 미제출 (${escapeHtml(c.lastSeen)})</span>`
                      }
                    </td>
                    <td style="padding:14px 10px; width:180px;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <div style="flex:1; height:8px; background:var(--bg-subtle); border-radius:99px; overflow:hidden;">
                          <div style="width:${c.score}%; height:100%; background:${c.badgeColor}; border-radius:99px;"></div>
                        </div>
                        <strong class="tabular-nums">${c.score}점</strong>
                      </div>
                    </td>
                    <td style="padding:14px 10px;">
                      <span class="badge-pill" style="background:rgba(0,0,0,0.05); color:${c.badgeColor}; font-weight:700;">
                        ${escapeHtml(c.grade)}
                      </span>
                    </td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  }

  // Modals: Room Creation / Join with PIN, New Resource, New Mindmap Node
  function renderModal() {
    if (!activeModal) return "";

    if (activeModal === "room") {
      return `
        <div class="modal-backdrop" onclick="window.teamApp.closeModal()">
          <div class="modal-sheet" onclick="event.stopPropagation()">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
              <h3 style="font-size:1.3rem; font-weight:700;">🔑 팀플 방 새로 파기 / 비번으로 입장</h3>
              <button class="nav-icon-btn" onclick="window.teamApp.closeModal()">닫기 ✕</button>
            </div>

            <div style="padding:14px; border-radius:16px; background:var(--bg-canvas); margin-bottom:18px; font-size:13px;">
              <div>현재 방 초대 코드: <strong class="tabular-nums" style="color:var(--apple-blue);">${escapeHtml(state.room.code)}</strong> · 비밀번호: <strong class="tabular-nums" style="color:#f56300;">${escapeHtml(state.room.pin)}</strong></div>
              <div style="color:var(--ink-secondary); margin-top:4px;">조장이 아래 정보를 바꿔 새 방을 개설하면 전용 링크와 비밀번호가 즉시 갱신됩니다.</div>
            </div>

            <form onsubmit="window.teamApp.saveRoomConfig(event)" style="display:flex; flex-direction:column; gap:12px;">
              <div>
                <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">수업 과목명</label>
                <input class="apple-input" name="course" value="${escapeHtml(state.room.course)}" required />
              </div>
              <div>
                <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">팀(조) 이름</label>
                <input class="apple-input" name="teamName" value="${escapeHtml(state.room.teamName)}" required />
              </div>
              <div>
                <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">공동 과제 최종 목표</label>
                <input class="apple-input" name="goal" value="${escapeHtml(state.room.goal)}" required />
              </div>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <div>
                  <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">방 입장 코드</label>
                  <input class="apple-input tabular-nums" name="code" value="${escapeHtml(state.room.code)}" required />
                </div>
                <div>
                  <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">방 비밀번호 (4자리)</label>
                  <input class="apple-input tabular-nums" name="pin" maxlength="8" value="${escapeHtml(state.room.pin)}" required />
                </div>
              </div>
              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px;">
                <button type="button" class="btn-secondary" onclick="window.teamApp.closeModal()">취소</button>
                <button type="submit" class="btn-primary">방 설정 저장 및 초대링크 복사</button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    if (activeModal === "newResource") {
      return `
        <div class="modal-backdrop" onclick="window.teamApp.closeModal()">
          <div class="modal-sheet" onclick="event.stopPropagation()">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
              <h3 style="font-size:1.3rem; font-weight:700;">📂 아카이브에 새 자료 올리기</h3>
              <button class="nav-icon-btn" onclick="window.teamApp.closeModal()">닫기 ✕</button>
            </div>
            <p style="font-size:12.5px; color:var(--ink-secondary); margin-bottom:14px;">
              PPT 및 보고서 담당자가 출처를 다시 찾는 고생을 하지 않도록 <strong>원본 출처 URL</strong>과 <strong>핵심 요약</strong>을 함께 등록합니다.
            </p>
            <form onsubmit="window.teamApp.createResource(event)" style="display:flex; flex-direction:column; gap:12px;">
              <div>
                <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">자료 분류</label>
                <select class="apple-select" name="category">
                  <option value="논문·학술">논문·학술</option>
                  <option value="통계·데이터">통계·데이터</option>
                  <option value="기사·레퍼런스">기사·레퍼런스</option>
                  <option value="PPT·초안">PPT·초안</option>
                </select>
              </div>
              <div>
                <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">자료 제목</label>
                <input class="apple-input" name="title" placeholder="예: 2026 대학생 AI 툴 활용 비율 통계" required />
              </div>
              <div>
                <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">핵심 3줄 요약 (발표/보고서 인용문)</label>
                <textarea class="apple-textarea" name="summary" rows="3" placeholder="핵심 수치나 결론을 요약해 적어주세요" required></textarea>
              </div>
              <div>
                <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">원본 출처 링크 (URL 필수)</label>
                <input class="apple-input" name="url" type="url" placeholder="https://..." value="https://" required />
              </div>
              <div>
                <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">검색 태그 (쉼표로 구분)</label>
                <input class="apple-input" name="tags" placeholder="통계, 서론, 참고문헌" />
              </div>
              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px;">
                <button type="button" class="btn-secondary" onclick="window.teamApp.closeModal()">취소</button>
                <button type="submit" class="btn-primary">자료 아카이브에 등록</button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    if (activeModal === "newNode") {
      return `
        <div class="modal-backdrop" onclick="window.teamApp.closeModal()">
          <div class="modal-sheet" onclick="event.stopPropagation()">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
              <h3 style="font-size:1.3rem; font-weight:700;">🧠 마인드맵에 새 의견·대안 노드 추가</h3>
              <button class="nav-icon-btn" onclick="window.teamApp.closeModal()">닫기 ✕</button>
            </div>
            <form onsubmit="window.teamApp.createMindmapNodeModal(event)" style="display:flex; flex-direction:column; gap:12px;">
              <div>
                <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">연결할 상위 노드</label>
                <select class="apple-select" name="parentId">
                  ${state.mindmap.nodes
                    .map((n) => `<option value="${n.id}">${escapeHtml(n.title)}</option>`)
                    .join("")}
                </select>
              </div>
              <div>
                <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">의견 제목</label>
                <input class="apple-input" name="title" placeholder="예: 에브리타임 시간표 자동 공강 추출" required />
              </div>
              <div>
                <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">제안 이유 / 문제의식</label>
                <input class="apple-input" name="reason" placeholder="왜 이 의견이 필요한가요?" required />
              </div>
              <div>
                <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px; color:#f56300;">💡 구체적인 실행 대안 (필수 입력)</label>
                <input class="apple-input" name="alt" placeholder="비판이나 막연한 의견 대신 구체적 실행 대안을 적어주세요" required />
              </div>
              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px;">
                <button type="button" class="btn-secondary" onclick="window.teamApp.closeModal()">취소</button>
                <button type="submit" class="btn-primary">마인드맵에 추가</button>
              </div>
            </form>
          </div>
        </div>
      `;
    }
    return "";
  }

  // Mindmap Dragging Interaction (1:1 Pointer Tracking per Apple Design Skill)
  function bindMindmapDragEvents() {
    const canvas = document.getElementById("mindmap-canvas");
    if (!canvas) return;

    const nodeEls = canvas.querySelectorAll(".mindmap-node");
    nodeEls.forEach((el) => {
      el.addEventListener("pointerdown", (e) => {
        if (e.target.tagName === "BUTTON") return;
        const id = el.getAttribute("data-node-id");
        draggingNodeId = id;
        el.setPointerCapture(e.pointerId);
      });

      el.addEventListener("pointermove", (e) => {
        if (!draggingNodeId) return;
        const rect = canvas.getBoundingClientRect();
        const xPct = Math.max(12, Math.min(88, ((e.clientX - rect.left) / rect.width) * 100));
        const yPct = Math.max(14, Math.min(86, ((e.clientY - rect.top) / rect.height) * 100));
        const node = state.mindmap.nodes.find((n) => n.id === draggingNodeId);
        if (node) {
          node.x = Math.round(xPct);
          node.y = Math.round(yPct);
          el.style.left = `${node.x}%`;
          el.style.top = `${node.y}%`;
          updateMindmapLinesOnly();
        }
      });

      el.addEventListener("pointerup", () => {
        if (draggingNodeId) {
          draggingNodeId = null;
          saveState();
        }
      });
    });
  }

  function updateMindmapLinesOnly() {
    const svg = document.querySelector("#mindmap-canvas .mindmap-svg");
    if (!svg) return;
    const nodes = state.mindmap.nodes;
    svg.innerHTML = nodes
      .filter((n) => n.parentId)
      .map((n) => {
        const parent = nodes.find((p) => p.id === n.parentId) || nodes[0];
        const midX = (parent.x + n.x) / 2;
        return `
          <path
            d="M ${parent.x}% ${parent.y}% C ${midX}% ${parent.y}%, ${midX}% ${n.y}%, ${n.x}% ${n.y}%"
            stroke="${n.adopted ? "#28cd41" : "#0066cc"}"
            stroke-width="2.5"
            stroke-dasharray="${n.type === "alt" ? "5,4" : "none"}"
            fill="none"
            opacity="0.78"
          />
        `;
      })
      .join("");
  }

  // Expose Public Actions
  window.teamApp = {
    setTab(tab) {
      state.activeTab = tab;
      saveState();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    toggleTheme() {
      state.theme = state.theme === "light" ? "dark" : "light";
      saveState();
      render();
      showToast(state.theme === "dark" ? "애플 다크 모드로 전환되었습니다." : "애플 스토어 라이트 모드로 전환되었습니다.");
    },

    switchUser(name) {
      state.currentUser = name;
      const member = state.members.find((m) => m.name === name);
      if (member) {
        member.status = "online";
        member.lastSeen = "현재 접속 중";
        member.unread = 0;
      }
      saveState();
      render();
      showToast(`현재 접속자가 '${name}'님으로 전환되었습니다. (생존 신호 자동 갱신)`);
    },

    copyInviteLink() {
      const url = `${window.location.origin}${window.location.pathname}?room=${encodeURIComponent(state.room.code)}`;
      const inviteText = `[팀플 스토어 초대]\n과목: ${state.room.course} (${state.room.teamName})\n방 코드: ${state.room.code}\n비밀번호: ${state.room.pin}\n바로 입장 링크: ${url}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(inviteText).catch(() => {});
      }
      showToast(`방 링크와 비밀번호(${state.room.pin})가 클립보드에 복사되었습니다!`);
    },

    openModal(modalName) {
      activeModal = modalName;
      render();
    },

    closeModal() {
      activeModal = null;
      render();
    },

    saveRoomConfig(e) {
      e.preventDefault();
      const fd = new FormData(e.target);
      state.room.course = fd.get("course");
      state.room.teamName = fd.get("teamName");
      state.room.goal = fd.get("goal");
      state.room.code = fd.get("code");
      state.room.pin = fd.get("pin");
      activeModal = null;
      saveState();
      render();
      window.teamApp.copyInviteLink();
    },

    toggleStageLock(stageId) {
      const st = state.stages.find((s) => s.id === stageId);
      if (!st) return;
      if (st.status === "locked") {
        st.status = "active";
        st.lockedAt = "잠금 해제됨 (재논의 중)";
        showToast(`'${st.title}' 잠금이 해제되었습니다.`);
      } else {
        st.status = "locked";
        st.lockedAt = "방금 확정 잠금됨 🔒";
        showToast(`'${st.title}' 단계가 확정 잠금되었습니다! 제출 직전 임의 변경이 차단됩니다.`);
      }
      saveState();
      render();
    },

    // Problem 1 & 2: Auto-balance workload points evenly across members
    autoBalanceTasks() {
      const sortedTasks = [...state.tasks].sort((a, b) => b.points - a.points);
      const totals = {};
      state.members.forEach((m) => (totals[m.name] = 0));

      sortedTasks.forEach((task) => {
        const lightestMember = Object.keys(totals).sort((a, b) => totals[a] - totals[b])[0];
        task.assignee = lightestMember;
        totals[lightestMember] += Number(task.points);
      });

      saveState();
      render();
      showToast("⚖️ 난이도 가중치(pt) 기반으로 모든 팀원의 업무량이 공평하게 재배치되었습니다!");
    },

    sendSystemNudge(memberId) {
      const m = state.members.find((x) => x.id === memberId);
      if (!m) return;
      m.nudges = (m.nudges || 0) + 1;
      saveState();
      render();
      showToast(`🔔 조장 대신 시스템 명의로 ${m.name}님에게 중간마감 독촉 알림을 발송했습니다! (누적 ${m.nudges}회 박제)`);
    },

    addTask(e) {
      e.preventDefault();
      const fd = new FormData(e.target);
      state.tasks.unshift({
        id: "t" + Date.now(),
        title: fd.get("title"),
        assignee: fd.get("assignee"),
        points: Number(fd.get("points")),
        checkpoint: "50% 체크 대기",
        status: "in_progress",
        updatedAt: "방금 전"
      });
      saveState();
      render();
      showToast("새로운 할 일과 난이도 가중치가 등록되었습니다.");
    },

    reassignTask(taskId, newAssignee) {
      const task = state.tasks.find((t) => t.id === taskId);
      if (task) {
        task.assignee = newAssignee;
        task.updatedAt = "방금 전";
        saveState();
        render();
        showToast(`담당자가 '${newAssignee}'님으로 변경되어 업무 부하율이 자동 재계산되었습니다.`);
      }
    },

    cycleTaskStatus(taskId) {
      const task = state.tasks.find((t) => t.id === taskId);
      if (!task) return;
      const order = ["todo", "in_progress", "done", "overdue"];
      const next = order[(order.indexOf(task.status) + 1) % order.length];
      task.status = next;
      task.checkpoint = next === "done" ? "완료" : next === "in_progress" ? "진행중" : next === "overdue" ? "미제출 🚨" : "대기";
      task.updatedAt = "방금 전";
      saveState();
      render();
    },

    setResourceFilter(cat) {
      resourceFilter = cat;
      render();
    },

    setResourceSearch(q) {
      resourceSearch = q;
      render();
    },

    toggleAltField(selectEl, resId) {
      const box = document.getElementById(`alt-box-${resId}`);
      if (!box) return;
      const input = box.querySelector("input");
      if (selectEl.value === "critique") {
        box.style.display = "block";
        if (input) input.required = true;
      } else {
        box.style.display = "none";
        if (input) {
          input.required = false;
          input.value = "";
        }
      }
    },

    addComment(e, resId) {
      e.preventDefault();
      const fd = new FormData(e.target);
      const type = fd.get("type");
      const text = (fd.get("text") || "").trim();
      const alt = (fd.get("alt") || "").trim();

      if (type === "critique" && alt.length < 3) {
        showToast("⚠️ 반대·수정 요청 시 반드시 구체적인 대안을 함께 입력해야 등록됩니다!");
        return;
      }

      const res = state.resources.find((r) => r.id === resId);
      if (!res) return;
      res.comments.push({
        id: "c" + Date.now(),
        author: state.currentUser,
        type,
        text,
        alt,
        time: "방금 전"
      });

      const me = state.members.find((m) => m.name === state.currentUser);
      if (me) me.altComments = (me.altComments || 0) + 1;

      saveState();
      render();
      showToast(type === "critique" ? "💡 대안이 포함된 피드백이 등록되어 기여도 점수가 상승했습니다!" : "💬 코멘트가 등록되었습니다.");
    },

    createResource(e) {
      e.preventDefault();
      const fd = new FormData(e.target);
      const rawTags = String(fd.get("tags") || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      state.resources.unshift({
        id: "r" + Date.now(),
        category: fd.get("category"),
        title: fd.get("title"),
        summary: fd.get("summary"),
        url: fd.get("url"),
        author: state.currentUser,
        createdAt: "방금 전",
        tags: rawTags.length ? rawTags : ["팀플자료"],
        comments: []
      });
      const me = state.members.find((m) => m.name === state.currentUser);
      if (me) me.filesCount = (me.filesCount || 0) + 1;
      activeModal = null;
      saveState();
      render();
      showToast("📂 새 자료가 아카이브에 정리되어 등록되었습니다!");
    },

    selectMindmapNode(nodeId) {
      state.mindmap.selectedNodeId = nodeId;
      saveState();
      render();
    },

    voteMindmapNode(nodeId) {
      const n = state.mindmap.nodes.find((x) => x.id === nodeId);
      if (!n) return;
      n.votes += 1;
      saveState();
      render();
      showToast(`👍 '${n.title}' 의견에 찬성 표를 던졌습니다!`);
    },

    toggleAdoptNode(nodeId) {
      const n = state.mindmap.nodes.find((x) => x.id === nodeId);
      if (!n) return;
      n.adopted = !n.adopted;
      saveState();
      render();
      showToast(n.adopted ? `✅ '${n.title}' 안건이 공식 채택되었습니다!` : "채택 상태가 해제되었습니다.");
    },

    addChildNodeInline(e, parentId) {
      e.preventDefault();
      const fd = new FormData(e.target);
      const parent = state.mindmap.nodes.find((n) => n.id === parentId) || state.mindmap.nodes[0];
      const newId = "n" + Date.now();
      state.mindmap.nodes.push({
        id: newId,
        parentId: parent.id,
        title: fd.get("title"),
        reason: fd.get("reason"),
        alt: fd.get("alt"),
        author: state.currentUser,
        type: "alt",
        x: Math.max(16, Math.min(84, parent.x + (Math.random() > 0.5 ? 18 : -18))),
        y: Math.max(18, Math.min(84, parent.y + (Math.random() > 0.5 ? 18 : -18))),
        votes: 1,
        adopted: false
      });
      state.mindmap.selectedNodeId = newId;
      saveState();
      render();
      showToast("🌿 대안이 포함된 새 마인드맵 가지가 연결되었습니다!");
    },

    createMindmapNodeModal(e) {
      e.preventDefault();
      const fd = new FormData(e.target);
      const newId = "n" + Date.now();
      state.mindmap.nodes.push({
        id: newId,
        parentId: fd.get("parentId"),
        title: fd.get("title"),
        reason: fd.get("reason"),
        alt: fd.get("alt"),
        author: state.currentUser,
        type: "idea",
        x: Math.floor(20 + Math.random() * 60),
        y: Math.floor(20 + Math.random() * 60),
        votes: 1,
        adopted: false
      });
      state.mindmap.selectedNodeId = newId;
      activeModal = null;
      saveState();
      render();
      showToast("🧠 마인드맵에 새 의견 노드가 추가되었습니다!");
    },

    resetMindmapLayout() {
      const defaults = [
        { x: 50, y: 50 },
        { x: 22, y: 24 },
        { x: 78, y: 24 },
        { x: 22, y: 78 },
        { x: 78, y: 78 },
        { x: 50, y: 18 },
        { x: 50, y: 84 }
      ];
      state.mindmap.nodes.forEach((n, idx) => {
        if (defaults[idx]) {
          n.x = defaults[idx].x;
          n.y = defaults[idx].y;
        }
      });
      saveState();
      render();
      showToast("마인드맵 노드 배치가 깔끔하게 정렬되었습니다.");
    },

    // Voice Recording (Real Web Speech API + Fallback)
    toggleVoiceRecording() {
      if (state.meeting.isRecording) {
        state.meeting.isRecording = false;
        if (recognition) {
          try {
            recognition.stop();
          } catch (e) {}
        }
        render();
        showToast("⏹️ 음성 녹음이 종료되었습니다. 우측 '대화 내용 재분석'을 눌러 역할을 추출해보세요!");
        return;
      }

      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      state.meeting.isRecording = true;
      render();

      if (!SpeechRec) {
        showToast("현재 브라우저에서 실시간 마이크 API가 제한되어 시연용 음성 인식을 시뮬레이션합니다.");
        setTimeout(() => {
          if (!state.meeting.isRecording) return;
          const now = new Date();
          const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
          state.meeting.transcript.push({
            speaker: `${state.currentUser} (마이크 녹음)`,
            time: timeStr,
            text: "제가 이번 주 금요일까지 설문조사 그래프 정리랑 PPT 초안 3장 추가로 맡아서 올릴게요."
          });
          state.meeting.isRecording = false;
          saveState();
          render();
          showToast("🎙️ 음성 발언이 텍스트로 자동 변환되었습니다!");
        }, 2500);
        return;
      }

      try {
        recognition = new SpeechRec();
        recognition.lang = "ko-KR";
        recognition.continuous = true;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
          const last = event.results[event.results.length - 1];
          if (last && last.isFinal) {
            const spoken = last[0].transcript.trim();
            if (spoken) {
              const now = new Date();
              const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
              state.meeting.transcript.push({
                speaker: `${state.currentUser} (실시간 음성)`,
                time: timeStr,
                text: spoken
              });
              saveState();
              render();
            }
          }
        };

        recognition.onerror = () => {
          state.meeting.isRecording = false;
          render();
        };

        recognition.start();
        showToast("🎙️ 실시간 한국어 음성 인식이 시작되었습니다! 마이크에 대고 말씀해 보세요.");
      } catch (err) {
        state.meeting.isRecording = false;
        render();
      }
    },

    addTranscriptLine(e) {
      e.preventDefault();
      const fd = new FormData(e.target);
      const text = (fd.get("text") || "").trim();
      if (!text) return;
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
      state.meeting.transcript.push({
        speaker: state.currentUser,
        time: timeStr,
        text
      });
      saveState();
      render();
      showToast("발언이 회의록에 추가되었습니다.");
    },

    loadDemoMeeting() {
      state.meeting.transcript = JSON.parse(JSON.stringify(defaultState.meeting.transcript));
      window.teamApp.runAiMeetingAnalyzer();
      showToast("🎬 현실 팀플 5인 회의 대화록이 로드되었습니다!");
    },

    runAiMeetingAnalyzer() {
      const extracted = [];
      state.meeting.transcript.forEach((line) => {
        const matchedMember =
          state.members.find((m) => line.speaker.includes(m.name) || line.text.includes(m.name)) ||
          state.members[Math.floor(Math.random() * state.members.length)];

        if (line.text.includes("PPT") || line.text.includes("디자인") || line.text.includes("시각")) {
          extracted.push({ title: `[회의록 추출] ${line.text.slice(0, 34)}...`, assignee: matchedMember.name, points: 30 });
        } else if (line.text.includes("자료") || line.text.includes("논문") || line.text.includes("통계") || line.text.includes("비교")) {
          extracted.push({ title: `[회의록 추출] ${line.text.slice(0, 34)}...`, assignee: matchedMember.name, points: 25 });
        } else if (line.text.includes("발표") || line.text.includes("대본") || line.text.includes("질문")) {
          extracted.push({ title: `[회의록 추출] ${line.text.slice(0, 34)}...`, assignee: matchedMember.name, points: 20 });
        }
      });

      if (extracted.length > 0) {
        state.meeting.aiSummary.extractedTasks = extracted.slice(0, 5);
      }
      saveState();
      render();
      showToast("✨ AI가 회의록을 분석하여 핵심 결정사항과 담당자별 할 일을 추출했습니다!");
    },

    applyExtractedTasksToBoard() {
      state.meeting.aiSummary.extractedTasks.forEach((et) => {
        state.tasks.unshift({
          id: "t" + Date.now() + Math.random().toString(36).slice(2, 5),
          title: et.title,
          assignee: et.assignee,
          points: et.points,
          checkpoint: "50% 체크 대기",
          status: "in_progress",
          updatedAt: "AI 회의록 자동반영"
        });
      });
      saveState();
      state.activeTab = "roles";
      render();
      showToast("📌 회의에서 추출된 모든 역할이 역할 분배 보드에 등록되었습니다!");
    },

    copyReportSummary() {
      const scores = getContributionScores();
      const lines = scores.map(
        (c) => `- ${c.name}(${c.studentId}) | 역할: ${c.role} | 업무비중: ${c.ratio}% | 자료: ${c.filesCount}건 | 대안코멘트: ${c.altComments}회 | 중간마감: ${c.checkpointDone ? "준수" : "미제출"} | 종합점수: ${c.score}점 (${c.grade})`
      );
      const reportText = `[${state.room.course} - ${state.room.teamName} 공식 기여도 리포트]\n\n${lines.join("\n")}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(reportText).catch(() => {});
      }
      showToast("📋 교수님 메일 첨부용 객관적 기여도 요약표가 클립보드에 복사되었습니다!");
    }
  };

  // Initialize from URL query if present
  const params = new URLSearchParams(window.location.search);
  if (params.get("room")) {
    state.room.code = params.get("room");
  }

  render();
})();
