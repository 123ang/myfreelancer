<template>
    <div id="tnc-display">
        <div class="container">
            <h4 class="text-center mb-4">{{ $t('message.termAndCondition') }}</h4>
            <div v-if="language === 'en'">
                <h5>1. Purpose</h5>
                <p>This agreement sets forth the terms and conditions governing the relationship between MyFreeLancer ("the Company") and users of our freelance platform service ("the Service"). The Service aims to centralize the scattered information on freelancers in Malaysia, their skills, rates, and portfolios, providing a win-win situation for both freelancers and businesses.</p>

                <h5>2. User Definition</h5>
                <p>Freelancer: An individual or entity offering services on the platform.<br>
                Client: A business or individual seeking services from freelancers.<br>
                User: A collective term for both Freelancers and Clients.</p>

                <h5>3. Acceptance of Terms</h5>
                <p>Before accessing or using the Service, users must read, understand, and agree to these terms. Continued use of the Service signifies ongoing acceptance of these terms.</p>

                <h5>4. Usage Requirements</h5>
                <p>Users are obligated to:<br>
                • Comply with all stipulations in this agreement.<br>
                • Pay any fees associated with the Service as determined by the Company.<br>
                • Provide accurate and truthful information during registration and in all interactions on the platform.</p>

                <h5>5. Service Description</h5>
                <p>The Service offers a platform for freelancers to showcase their skills, portfolios, and set their rates. Clients can post job requirements, browse freelancer profiles, and make informed hiring decisions. The Company does not mediate or guarantee the quality of work, payment, or any other aspect of transactions between users.</p>

                <h5>6. Restrictions</h5>
                <p>Users must refrain from:<br>
                • Engaging in fraudulent, illegal, or immoral activities.<br>
                • Disrupting, hacking, or attempting unauthorized access to our services.<br>
                • Defaming, harassing, or causing harm to other users.<br>
                • Copying, distributing, or using any content from the platform without proper authorization.<br>
                • Any actions that the Company deems inappropriate or harmful.</p>

                <h5>7. Payment and Fees</h5>
                <p>Users must pay Service fees using methods specified by the Company. The Company may revise fee structures and introduce new charges. Users will be notified of any changes.</p>

                <h5>8. Service Interruptions</h5>
                <p>The Company may occasionally suspend or halt the Service for:<br>
                • Scheduled maintenance.<br>
                • System updates or unforeseen technical failures.<br>
                • External events beyond the Company's control.<br>
                The Company will strive to minimize downtime and inform users of extended interruptions.</p>

                <h5>9. Service Modifications</h5>
                <p>The Company may enhance, modify, or discontinue features of the Service based on user feedback, technological advancements, or business decisions.</p>

                <h5>10. Limitation of Liability</h5>
                <p>The Company is not responsible for:<br>
                • Disputes between users.<br>
                • Damages arising from Service unavailability or inaccuracies.<br>
                • Losses or damages resulting from user interactions or transactions.
                </p>

                <h5>11. Intellectual Property</h5>
                <p>All content, logos, graphics, and other intellectual property related to the Service are owned by the Company or rightful third parties. Unauthorized use or infringement is strictly prohibited.</p>

                <h5>12. Compensation</h5>
                <p>Users who breach this agreement and cause damages to the Company or other users will be held liable for compensation.</p>

                <h5>13. Agreement Updates</h5>
                <p>The Company may periodically update this agreement. Users will be notified of significant changes, and continued use of the Service signifies acceptance of the revised terms.</p>

                <h5>14. Legalities</h5>
                <p>This agreement is governed by Malaysian law. Disputes related to the Service will be resolved in the court nearest to the Company's location.</p>

                <h5>Effective Date</h5>
                <p>This agreement is effective from April 15, 2023.</p>

                <h5>Conclusion</h5>
                <p>Thank you for choosing MyFreeLancer. We are committed to providing a secure and efficient platform for all users.</p>
            </div>

            <div v-if="language === 'cn'">
                <h5>1. 宗旨</h5>
                <p>本协议规定了MyFreeLancer（“公司”）与我们的自由职业者平台服务（“服务”）用户之间关系的条款和条件。该服务旨在集中马来西亚的自由职业者的零散信息、他们的技能、费率和作品集，为自由职业者和企业双方提供双赢的局面。</p>

                <h5>2. 用户定义</h5>
                <p>自由职业者：在平台上提供服务的个人或实体。<br>
                    客户：从自由职业者那里寻求服务的企业或个人。<br>
                    用户：自由职业者和客户的统称。
                </p>

                <h5>3. 接受条款</h5>
                <p>在访问或使用服务之前，用户必须阅读、理解并同意这些条款。继续使用服务表示持续接受这些条款。</p>

                <h5>4. 使用要求</h5>
                <p>用户有义务：<br>
                • 遵守本协议中的所有规定。<br>
                • 支付公司确定的与服务相关的任何费用。<br>
                • 在注册和在平台上的所有互动中提供准确和真实的信息。<br>
                </p>

                <h5>5. 服务描述</h5>
                <p>该服务为自由职业者提供了一个展示他们的技能、作品集和设定费率的平台。客户可以发布工作要求、浏览自由职业者的个人资料，并做出明智的雇佣决策。公司不调解或保证工作质量、支付或用户之间交易的任何其他方面。</p>

                <h5>6. 限制</h5>
                <p>用户必须避免：<br>
                • 参与欺诈、非法或不道德的活动。<br>
                • 干扰、黑客攻击或尝试未经授权访问我们的服务。<br>
                • 诽谤、骚扰或伤害其他用户。<br>
                • 未经适当授权复制、分发或使用平台上的任何内容。<br>
                • 公司认为不适当或有害的任何行动。<br>
                </p>

                <h5>7. 支付和费用</h5>
                <p>用户必须使用公司指定的方法支付服务费。公司可能会修改费用结构并引入新的收费。用户将被通知任何变化。</p>

                <h5>8. 服务中断</h5>
                <p>公司可能偶尔因以下原因暂停或停止服务：<br>
                • 计划的维护。系统更新或不可预见的技术故障。<br>
                • 公司无法控制的外部事件。<br>
                • 公司将努力减少停机时间，并通知用户延长的中断。<br>
                </p>

                <h5>9. 服务修改</h5>
                <p>公司可能根据用户反馈、技术进步或业务决策增强、修改或停止服务的功能。</p>

                <h5>10. 责任限制</h5>
                <p>公司不负责：<br>
                • 用户之间的争议。<br>
                • 由于服务不可用或不准确而产生的损害。<br>
                • 由用户互动或交易造成的损失或损害。<br>
                </p>

                <h5>11. 知识产权</h5>
                <p>与服务相关的所有内容、徽标、图形和其他知识产权均由公司或合法的第三方拥有。严禁未经授权使用或侵权。</p>

                <h5>12. 赔偿</h5>
                <p>违反本协议并对公司或其他用户造成损害的用户将承担赔偿责任。</p>

                <h5>13. 协议更新</h5>
                <p>公司可能会定期更新本协议。用户将被通知重大变更，继续使用服务表示接受修订后的条款。</p>

                <h5>14. 法律事宜</h5>
                <p>本协议受马来西亚法律管辖。与服务相关的争议将在公司所在地最近的法院解决。</p>

                <h5>生效日期</h5>
                <p>本协议自2023年4月15日起生效。</p>

                <h5>结论</h5>
                <p>感谢您选择MyFreeLancer。我们致力于为所有用户提供安全高效的平台。</p>
            </div>
            <div v-if="language === 'my'">
                <h5>1. Tujuan</h5>
                <p>Perjanjian ini menetapkan terma dan syarat yang mengawal hubungan antara MyFreeLancer ("Syarikat") dan pengguna perkhidmatan platform pekerja bebas kami ("Perkhidmatan"). Perkhidmatan ini bertujuan untuk menyatukan maklumat yang tersebar mengenai pekerja bebas di Malaysia, kemahiran mereka, kadar, dan portfolio, menyediakan situasi menang-menang untuk kedua-dua pekerja bebas dan perniagaan.</p>

                <h5>2. Definisi Pengguna</h5>
                <p>Pekerja Bebas: Individu atau entiti yang menawarkan perkhidmatan di platform ini.<br>
                    Pelanggan: Perniagaan atau individu yang mencari perkhidmatan dari pekerja bebas. <br>
                    Pengguna: Terma kolektif untuk Pekerja Bebas dan Pelanggan.
                </p>

                <h5>3. Penerimaan Terma</h5>
                <p>Sebelum mengakses atau menggunakan Perkhidmatan, pengguna mesti membaca, memahami, dan bersetuju dengan terma-terma ini. Penggunaan berterusan Perkhidmatan menandakan penerimaan berterusan terma ini.</p>

                <h5>4. Keperluan Penggunaan</h5>
                <p>Pengguna adalah diwajibkan untuk: <br>
                • Mematuhi semua syarat dalam perjanjian ini. <br>
                • Membayar sebarang yuran yang berkaitan dengan Perkhidmatan seperti yang ditentukan oleh Syarikat. <br>
                • Memberi maklumat yang tepat dan jujur semasa pendaftaran dan dalam semua interaksi di platform.
                </p>

                <h5>5. Penerangan Perkhidmatan</h5>
                <p>Perkhidmatan menawarkan platform untuk pekerja bebas untuk mempamerkan kemahiran, portfolio, dan menetapkan kadar mereka. Pelanggan boleh menyiarkan keperluan kerja, melayari profil pekerja bebas, dan membuat keputusan pekerjaan yang bermaklumat. Syarikat tidak menjadi perantara atau menjamin kualiti kerja, pembayaran, atau aspek lain transaksi antara pengguna.</p>

                <h5>6. Sekatan</h5>
                <p>Pengguna mesti menjauhi dari: <br>
                • Melibatkan diri dalam aktiviti penipuan, haram, atau tidak bermoral. <br>
                • Mengganggu, meretas, atau mencuba untuk mengakses perkhidmatan kami tanpa kebenaran. <br>
                • Memfitnah, mengganggu, atau menyebabkan kerosakan kepada pengguna lain.<br>
                • Menyalin, mengedarkan, atau menggunakan apa-apa kandungan dari platform tanpa kebenaran yang sewajarnya. <br>
                • Sebarang tindakan yang dianggap tidak sesuai atau membahayakan oleh Syarikat.<br>
                </p>

                <h5>7. Pembayaran dan Yuran</h5>
                <p>Pengguna mesti membayar yuran Perkhidmatan dengan kaedah yang ditentukan oleh Syarikat. Syarikat boleh menyemak semula struktur yuran dan memperkenalkan caj baru. Pengguna akan dimaklumkan mengenai sebarang perubahan.</p>

                <h5>8. Gangguan Perkhidmatan</h5>
                <p>Syarikat mungkin sekali-sekala menggantung atau menghentikan Perkhidmatan kerana:<br>
                    • Penyelenggaraan yang dijadualkan. Kemaskini sistem atau kegagalan teknikal yang tidak dijangka. <br>
                    • Acara luaran yang di luar kawalan Syarikat. <br>
                    • Syarikat akan berusaha untuk mengurangkan masa berhenti dan memaklumkan pengguna tentang gangguan yang berpanjangan.
                </p>

                <h5>9. Pengubahsuaian Perkhidmatan</h5>
                <p>Syarikat boleh meningkatkan, mengubah, atau menghentikan ciri-ciri Perkhidmatan berdasarkan maklum balas pengguna, kemajuan teknologi, atau keputusan perniagaan.</p>

                <h5>10. Had Liabiliti</h5>
                <p>Syarikat tidak bertanggungjawab atas: <br>
                    • Pertikaian antara pengguna.<br>
                    • Kerugian yang timbul daripada ketidaktersediaan atau ketidakakuratan Perkhidmatan.<br>
                    • Kehilangan atau kerugian yang disebabkan oleh interaksi atau transaksi pengguna.
                </p>

                <h5>11. Hak Intelektual</h5>
                <p>Semua kandungan, logo, grafik, dan hak intelektual lain yang berkaitan dengan Perkhidmatan dimiliki oleh Syarikat atau pihak ketiga yang berhak. Sebarang penggunaan atau pelanggaran tanpa kebenaran adalah dilarang.</p>

                <h5>12. Pampasan</h5>
                <p>Pengguna yang melanggar perjanjian ini dan menyebabkan kerugian kepada Syarikat atau pengguna lain akan bertanggungjawab bagi pampasan.</p>

                <h5>13. Kemaskini Perjanjian</h5>
                <p>Syarikat mungkin akan mengemas kini perjanjian ini dari masa ke semasa. Pengguna akan dimaklumkan mengenai perubahan yang material, dan penggunaan berterusan Perkhidmatan menunjukkan penerimaan terma yang telah disemak semula.</p>

                <h5>14. Isu Undang-undang</h5>
                <p>Perjanjian ini dikuasai oleh undang-undang Malaysia. Sebarang pertikaian yang berkaitan dengan Perkhidmatan akan diselesaikan di mahkamah yang paling dekat dengan lokasi Syarikat.</p>

                <h5>Tarikh Kuat Kuasa</h5>
                <p>Perjanjian ini berkuat kuasa mulai 15 April 2023.</p>

                <h5>Penutup</h5>
                <p>Terima kasih kerana memilih MyFreeLancer. Kami komited untuk menyediakan platform yang selamat dan berkesan untuk semua pengguna.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed  } from 'vue'
import { useStore } from 'vuex';

export default defineComponent({
    name: 'TncDisplay',
    components: {},
    setup() {
        const isTncToggle = ref<boolean>(true); 
        let tncModal:HTMLElement;
        let container:HTMLElement;
        let body:HTMLElement;    
        const store = useStore();    
        const language = computed(() => store.state.language);
        onMounted(
            ()=>{
                tncModal = document.querySelector('#tnc-display')!;
                container = tncModal.querySelector('.container')!;
                body = document.querySelector('body')!;

                tncModal?.addEventListener('click', (e:MouseEvent)=>{
                    e.stopPropagation();
                    if (container.contains(e.target as Node)) return isTncToggle.value = true;
                    tncModal.classList.remove('active');
                    body.removeAttribute('style');
                    isTncToggle.value = false;                    
                })
            }
        )

        return{
            isTncToggle,
            language
        }
    }, 
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './TncDisplay.styles.scss';
</style>