import React, { useState } from 'react';
import './App.css';
import protectionKidsImg from './assets/protection_kids.png';

const AccordionCard = ({ title, children, emoji }: { title: string, children: React.ReactNode, emoji?: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`subsection-card ${expanded ? 'expanded' : ''}`} onClick={() => setExpanded(!expanded)}>
      <div className="subsection-header">
        {emoji && <span style={{ fontSize: '24px' }}>{emoji}</span>}
        <h3 className="subsection-title">{title}</h3>
        <div className="expand-icon">{expanded ? '−' : '+'}</div>
      </div>
      <div className="subsection-content">
        {children}
      </div>
    </div>
  );
};

function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <a href="#" className="logo">
          🛡️ SafeSteps
        </a>
        <div className="nav-links">
          <a href="#section-1" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('section-1'); }}>Khái niệm</a>
          <a href="#section-2" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('section-2'); }}>Các dạng bạo lực</a>
          <a href="#section-3" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('section-3'); }}>Dấu hiệu</a>
          <a href="#section-4" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('section-4'); }}>Hỗ trợ</a>
        </div>
        <a href="#" className="btn-get-help">Get Help 💬</a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Chung Tay Đẩy Lùi Bạo Hành Trẻ Em</h1>
          <p className="hero-subtitle">
            Dự án Truyền thông từ Phòng Tham vấn Học đường nhằm nâng cao nhận thức cho Giáo viên và Phụ huynh. Hãy cùng nhận diện các dấu hiệu tổn thương và đồng hành hỗ trợ trẻ kịp thời nhất.
          </p>
          <button className="btn-explore" onClick={() => scrollToSection('section-1')}>
            Bắt Đầu Khám Phá
          </button>
        </div>
        <div className="hero-image">
          <img src={protectionKidsImg} alt="Protection Kids Illustration" />
        </div>
      </section>

      <main className="main-content">
        
        {/* SECTION 1 */}
        <section id="section-1" className="content-section section-blue">
          <div className="section-header">
            <div className="section-icon">📘</div>
            <h2 className="section-title">1. Các khái niệm liên quan</h2>
          </div>
          <p className="section-description">Cùng tìm hiểu những định nghĩa và quyền cơ bản về bảo vệ trẻ em.</p>
          
          <div className="subsection-grid">
            <AccordionCard title="Khái niệm bạo hành, bạo lực trẻ em" emoji="⚖️">
              <p>Theo Tổ chức Y tế Thế giới (WHO), bạo lực là việc cố ý sử dụng lực vật lý hoặc quyền lực, mang tính đe dọa hoặc thực tế, chống lại chính mình, người khác, hoặc chống lại một nhóm hay một cộng đồng, dẫn đến hoặc có khả năng cao gây ra thương tích, tử vong, tổn thương tâm lý, kém phát triển hoặc tước đoạt quyền lợi”.</p>
              <br/>
              <p>Khoản 6 Điều 4 Luật Trẻ Em 2016 giải thích các hành vi bạo hành, bạo lực trẻ em là hành vi hành hạ, ngược đãi, đánh đập; xâm hại thân thể, sức khỏe; lăng mạ, xúc phạm danh dự, nhân phẩm; cô lập, xua đuổi và các hành vi cố ý khác gây tổn hại về thể chất, tinh thần của trẻ em.</p>
            </AccordionCard>
            
            <AccordionCard title="Khái niệm bạo lực thể xác" emoji="🤕">
              <p>Theo Công ước về Quyền trẻ em, bạo lực thể xác bao gồm tra tấn thể xác, trừng phạt thể xác tàn nhẫn và vô nhân đạo, bắt nạt và bắt nạt thể xác, và trừng phạt thể xác. Nó có thể liên quan đến việc ai đó sử dụng một vật thể hoặc bộ phận cơ thể để làm hại thể chất hoặc kiểm soát một đứa trẻ. Tát, đánh đòn, đẩy, đấm, đá, bóp cổ và đốt cháy đều cấu thành bạo lực thể xác. Ở những dạng nghiêm trọng nhất, bạo lực thể xác dẫn đến chấn thương đầu, tàn tật và tử vong.</p>
            </AccordionCard>

            <AccordionCard title="Khái niệm bạo lực tinh thần" emoji="😢">
              <p>Bạo lực tinh thần (còn được gọi là lạm dụng tinh thần hoặc tâm lý) có thể được thực hiện theo nhiều cách. Đe dọa, xúc phạm, từ chối, phớt lờ, chế giễu hoặc dọa trẻ em đều là những hình thức bạo lực tình cảm. Ví dụ, việc bỏ bê nhu cầu giáo dục của trẻ em, buộc chúng phải biệt giam hoặc từ chối phản ứng cảm xúc cũng vậy.</p>
            </AccordionCard>

            <AccordionCard title="Khái niệm bạo lực tình dục" emoji="💔">
              <p>Thường đi kèm với bạo lực thể xác hoặc tinh thần, bạo lực tình dục bao gồm từ tiếp xúc cơ thể trực tiếp đến tiếp xúc không mong muốn với ngôn ngữ và hình ảnh tình dục. Nó bao gồm các tình huống trong đó một đứa trẻ bị buộc phải thực hiện một hành vi tình dục, bị ép buộc phải để lộ các bộ phận cơ thể của mình (trực tiếp hoặc trực tuyến), bị ép phải xem các hoạt động tình dục của người khác, chịu sự tiến bộ tình dục của người lớn hoặc bạn bè và nhiều hành vi lạm dụng khác. Hiến dâm là một hình thức bạo lực tình dục nghiêm trọng có thể được gây ra bởi một cá nhân hoặc một nhóm như một hình phạt hoặc vũ khí chiến tranh.</p>
            </AccordionCard>
          </div>
        </section>

        {/* SECTION 2 */}
        <section id="section-2" className="content-section section-pink">
          <div className="section-header">
            <div className="section-icon">🚨</div>
            <h2 className="section-title">2. Các dạng bạo lực, bạo hành trẻ em</h2>
          </div>
          <p className="section-description">Hầu hết các hành vi bạo lực đối với trẻ em liên quan đến ít nhất một trong sáu loại hình bạo lực giữa các cá nhân với nhau.</p>
          
          <div className="subsection-grid">
            <AccordionCard title="Ngược đãi (bao gồm cả trừng phạt bạo lực)" emoji="🚫">
              <p>Bao gồm bạo lực thể xác, tình dục và tâm lý/cảm xúc; cũng như sự bỏ mặc trẻ sơ sinh, trẻ em và trẻ vị thành niên bởi cha mẹ, người chăm sóc và những người có thẩm quyền khác, xảy ra phổ biến nhất ở gia đình nhưng cũng xuất hiện trong các bối cảnh khác như trường học và trại trẻ mồ côi.</p>
            </AccordionCard>

            <AccordionCard title="Bắt nạt (bao gồm cả bắt nạt trên mạng)" emoji="📱">
              <p>Là hành vi hung hăng, không mong muốn từ một đứa trẻ khác hoặc một nhóm trẻ không phải là anh chị em ruột, cũng không trong mối quan hệ yêu đương với nạn nhân. Hành vi này bao gồm các tổn hại lặp đi lặp lại về thể chất, tâm lý hoặc xã hội, và thường diễn ra ở trường học, các bối cảnh khác nơi trẻ em tụ tập, hoặc ở trên mạng.</p>
            </AccordionCard>

            <AccordionCard title="Bạo lực thanh thiếu niên" emoji="🥊">
              <p>Tập trung chủ yếu ở những người trong độ tuổi từ 10–29 tuổi, thường xảy ra nhất trong bối cảnh cộng đồng giữa những người quen biết hoặc người lạ, bao gồm tấn công thể xác có sử dụng vũ khí (như súng và dao) hoặc không có vũ khí, và có thể liên quan đến bạo lực băng đảng.</p>
            </AccordionCard>

            <AccordionCard title="Bạo lực từ bạn đời (hoặc bạo lực gia đình)" emoji="🏠">
              <p>Bao gồm hành vi bạo lực do bạn đời hoặc bạn đời cũ gây ra. Mặc dù nam giới cũng có thể là nạn nhân, nhưng bạo lực từ bạn đời ảnh hưởng không cân xứng (nghiêm trọng hơn nhiều) đến nữ giới. Tình trạng này thường xảy ra đối với các em gái trong các cuộc nạn tảo hôn và cưỡng ép kết hôn sớm. Đối với những trẻ vị thành niên đang trong mối quan hệ yêu đương nhưng chưa kết hôn, hành vi này đôi khi được gọi là “bạo lực khi hẹn hò”.</p>
            </AccordionCard>

            <AccordionCard title="Bạo lực tình dục" emoji="🛑">
              <p>Bao gồm các hành vi tiếp xúc tình dục đã thực hiện hoặc cố ý thực hiện khi chưa có sự đồng thuận; các hành vi không đồng thuận mang tính chất tình dục nhưng không tiếp xúc (như quay lén/nhìn trộm hoặc quấy rối tình dục); các hành vi mua bán tình dục đối với một người không có khả năng đồng thuận hoặc từ chối; và nạn bóc lột tình dục trực tuyến.</p>
            </AccordionCard>

            <AccordionCard title="Bạo lực cảm xúc hoặc tâm lý và chứng kiến bạo lực" emoji="👀">
              <p>Bao gồm việc hạn chế quyền tự do đi lại của trẻ, bôi nhọ, chế giễu, đe dọa và uy hiếp, phân biệt đối xử, từ chối/hắt hủi và các hình thức đối xử thù địch phi thể xác khác. Chứng kiến bạo lực có thể bao gồm việc ép buộc đứa trẻ phải quan sát một hành vi bạo lực, hoặc trẻ vô tình chứng kiến bạo lực giữa hai hay nhiều người khác.</p>
            </AccordionCard>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="section-3" className="content-section section-yellow">
          <div className="section-header">
            <div className="section-icon">🔍</div>
            <h2 className="section-title">3. Dấu hiệu trẻ bị bạo lực, bạo hành</h2>
          </div>
          <p className="section-description">Bạo lực đối với trẻ em thường bị che giấu, không được nhìn thấy hoặc không được báo cáo đầy đủ nhưng hệ quả của nó sẽ luôn lộ diện qua sức khỏe và hành vi của trẻ.</p>
          
          <div className="subsection-grid">
            <AccordionCard title="Dấu hiệu thể chất trực tiếp" emoji="🩹">
              <p>Các vết thương không rõ nguyên nhân, vết bỏng, gãy xương, chấn thương đầu hoặc các cơ quan nội tạng.</p>
            </AccordionCard>

            <AccordionCard title="Dấu hiệu tâm lý và tâm thần" emoji="🌧️">
              <p><strong>Trẻ biểu hiện trầm cảm:</strong> Thích ở một mình hơn có người bên cạnh; từ chối nói chuyện với mọi người, quá rụt rè, nhút nhát, buồn rầu hoặc trầm cảm, không hoà mình với mọi người, không có nhiều sinh lực, ít cởi mở, giữ kín mọi chuyện trong lòng. Nếu có từ 4 dấu hiệu trở lên xuất hiện ở mức thường xuyên... cần đánh giá sâu hơn.</p>
              <br/>
              <p><strong>Lo âu:</strong> Hay khóc, sợ đi học, sợ một số tình huống, sợ mình sẽ nghĩ hoặc làm điều gì xấu... nghĩ đến việc tự tử. Nếu có từ 6 dấu hiệu trở lên... cần đánh giá sâu hơn.</p>
              <br/>
              <p><strong>Rối loạn căng thẳng sau sang chấn (PTSD)</strong></p>
              <p><strong>Có ý định tự tử</strong></p>
            </AccordionCard>

            <AccordionCard title="Xâm hại thể chất" emoji="⚠️">
              <p>Cử động lúng túng, than phiền về việc đau nhức, tự huỷ hoại, các hành vi xâm kích và thu mình mang tính cực đoan, không thoải mái với các tiếp xúc thể chất, đến trường sớm hoặc ở lại muộn như thể trẻ sợ điều gì đó, thường xuyên trốn khỏi nhà, mặc đồ cao cổ, dài tay, không phù hợp với thời tiết để che cơ thể, thường xuyên vắng mặt.</p>
              <br/>
              <p><em>(Nếu có từ 1 dấu hiệu trở lên đều cần quan tâm chia sẻ với trẻ để làm rõ các nghi vấn. Nếu có dấu hiệu tự sát, phải thực hiện quy trình an toàn và tìm kiếm sự giúp đỡ ngay lập tức.)</em></p>
            </AccordionCard>

            <AccordionCard title="Bỏ bê thể chất" emoji="💤">
              <p>Ngủ gật trong lớp, ăn trộm đồ ăn, xin đồ ăn, trẻ báo rằng mình không có người chăm sóc ở nhà, thường xuyên vắng mặt hoặc đến muộn, hoặc ở trường lâu nhất có thể, tự huỷ hoại, gây rắc rối với luật pháp/pháp lệ.</p>
              <br/>
              <p><em>Nếu có từ 1 dấu hiệu trở lên đều cần quan tâm chia sẻ với trẻ để làm rõ các nghi vấn. Nếu có dấu hiệu tự sát, phải thực hiện quy trình an toàn và tìm kiếm sự giúp đỡ ngay lập tức.</em></p>
            </AccordionCard>

            <AccordionCard title="Hành vi hung hăng, gây gổ" emoji="😡">
              <p>Hay cãi cọ, hay trêu chọc người khác, làm nhiều điều để thu hút sự chú ý của người khác, phá hoại đồ đạc của mình, phá hoại đồ đạc của gia đình, của người khác, không vâng lời cha mẹ, không vâng lời giáo viên và nhân viên trong trường, hay đánh nhau, tấn công người khác, la hét nhiều, bướng bỉnh, cảm xúc thay đổi đột ngột, đa nghi, hay trêu chọc mọi người, dễ nổi khùng, hay hăm dọa mọi người, gây ồn ào hơn các trẻ khác.</p>
              <br/>
              <p><em>Cần đánh giá sâu hơn nếu có từ 8 dấu hiệu trở lên.</em></p>
            </AccordionCard>

            <AccordionCard title="Thay đổi hành vi" emoji="🔄">
              <p>Trẻ bắt đầu sử dụng rượu, thuốc lá, ma túy; có các hành vi tình dục nguy cơ cao; hoặc gặp khó khăn trong việc thiết lập mối quan hệ với bạn bè.</p>
            </AccordionCard>

            <AccordionCard title="Kết quả học tập" emoji="📉">
              <p>Sự sa sút đột ngột trong học tập, thường xuyên bỏ học hoặc thiếu tập trung cũng là những chỉ báo quan trọng về tình trạng bạo lực tiềm ẩn.</p>
            </AccordionCard>
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="section-4" className="content-section section-green">
          <div className="section-header">
            <div className="section-icon">💚</div>
            <h2 className="section-title">4. Cách thức hỗ trợ trẻ có dấu hiệu bị bạo lực, bạo hành</h2>
          </div>
          <p className="section-description">Cộng đồng cùng chung tay giúp đỡ trẻ em vượt qua khó khăn.</p>
          
          <div className="subsection-grid">
            <AccordionCard title="Cách thức giáo viên hỗ trợ" emoji="👩‍🏫">
              <p>Giáo viên là những người có cơ hội tiếp xúc và quan sát học sinh thường xuyên, vì vậy đóng vai trò quan trọng trong việc phát hiện sớm các dấu hiệu trẻ bị bạo hành. Khi nhận thấy học sinh có những biểu hiện bất thường về cảm xúc, hành vi, học tập hoặc xuất hiện các dấu hiệu nghi ngờ bị bạo hành, giáo viên cần tiếp cận trẻ bằng sự quan tâm, tôn trọng và không phán xét.</p>
              <br/>
              <p>Một cuộc trò chuyện riêng tư, nhẹ nhàng có thể giúp học sinh cảm thấy an toàn hơn. Giáo viên cần lắng nghe tích cực, thể hiện sự đồng cảm và tránh đặt những câu hỏi mang tính chất chất vấn hoặc đổ lỗi.</p>
              <br/>
              <p>Cần ghi nhận các dấu hiệu đáng lưu ý và chủ động phối hợp với nhà tham vấn học đường, Ban giám hiệu, phụ huynh hoặc các lực lượng bảo vệ trẻ em khi cần thiết. Việc phối hợp liên ngành giúp đánh giá đầy đủ tình hình, xây dựng kế hoạch hỗ trợ phù hợp. Giáo viên đóng vai trò phát hiện, hỗ trợ ban đầu và kết nối các nguồn lực.</p>
              <br/>
              <p>Giáo viên cần tiếp tục theo dõi, động viên và tạo môi trường học tập an toàn, thân thiện để học sinh cảm thấy được tôn trọng và bảo vệ, giúp ngăn ngừa những hậu quả tâm lý lâu dài.</p>
            </AccordionCard>

            <AccordionCard title="Cách thức gia đình hỗ trợ" emoji="👨‍👩‍👧‍👦">
              <p>Trước những dấu hiệu nghi ngờ trẻ bị bạo hành, điều quan trọng nhất mà cha mẹ cần làm là lắng nghe con bằng thái độ bình tĩnh, cởi mở và không phán xét. Thay vì vội vàng truy tìm nguyên nhân hay ép trẻ phải kể lại toàn bộ sự việc, cha mẹ nên tập trung giúp trẻ cảm thấy an toàn, được lắng nghe và được thấu hiểu.</p>
              <br/>
              <p>Khi trẻ chia sẻ, hãy thể hiện sự tin tưởng bằng những lời nói như: “Bố mẹ tin con”, “Cảm ơn con đã chia sẻ điều này với bố mẹ”, “Con không phải đối mặt với chuyện này một mình”. Những phản hồi tích cực sẽ giúp trẻ giảm bớt cảm giác sợ hãi, xấu hổ hoặc tội lỗi.</p>
              <br/>
              <p>Cha mẹ cần chủ động phối hợp với giáo viên, nhà tham vấn học đường hoặc các chuyên gia liên quan để đánh giá tình hình và xây dựng phương án hỗ trợ phù hợp. Việc trao đổi với nhà trường giúp xác định rõ những khó khăn trẻ đang gặp phải.</p>
              <br/>
              <p>Cần duy trì sự hiện diện và đồng hành cùng con trong suốt quá trình hỗ trợ. Sự quan tâm, yêu thương và hỗ trợ nhất quán từ gia đình là yếu tố giúp trẻ vượt qua những tổn thương về tâm lý, lấy lại cảm giác an toàn và từng bước phục hồi. Các em xứng đáng được yêu thương, tôn trọng và bảo vệ.</p>
            </AccordionCard>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="footer-brand">
          🛡️ SafeSteps © 2026. All rights reserved.
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Contact Us</a>
          <a href="#" className="footer-link">Teachers Guide</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
